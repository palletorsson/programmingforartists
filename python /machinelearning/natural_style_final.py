# Tests
# Feature layers
# * ['block2_conv2']  - done
# * ['block4_conv2']
# ['block5_conv1']
# Content weight
# * 0.025 - done
# * 0.021 
# * 0.023 
# * 0.027 
# * 0.029 
# Style weight
# * 5 - done
# * 5.5 
# * 4.5
# Total varitation weight
# * 1.0 - done
# * 1.1 
# * 0.9  
# Keras model
# * vgg16 - done 
# * vgg19
from __future__ import print_function

import time
from PIL import Image
import numpy as np

from keras import backend
from keras.models import Model
from keras.applications.vgg16 import VGG16
from keras.applications.vgg19 import VGG19

from scipy.optimize import fmin_l_bfgs_b
#from scipy.optimize import fmin_o_lbfgs 
from scipy.misc import imsave

# global variables 
height = 512
width = 512

feature_layers = ['block1_conv2', 'block2_conv2',
                  'block3_conv3', 'block4_conv3',
                  'block5_conv3']

content_images 	= 	['images/base_image2.jpg'] #] #, 'images/img18.jpg', 'images/img10.jpg', 'images/greek.jpg', 'images/img21.jpg', ]
style_images 	= 	['images/monet.jpg'] #, 'images/gu.jpg', 'images/wave.jpg', 'images/wave.jpg', 'images/wave.jpg',]

tests = 1

def main(): 
    content_weight = 0.021
    style_weight = 5.0
    total_variation_weight = 1.0 
    # start the style transfer with iterations, 
    # content image and style image as argument
    for index in range(5):
    	if (tests == 0):
            styleTransfere(10, content_images[index], style_images[index], index+12, content_weight, style_weight, total_variation_weight)
        else: 
            content_weight = content_weight + 0.002
            styleTransfere(10,'images/f.jpg', 'images/monet.jpg', index+10, content_weight, style_weight, total_variation_weight)

def getImagesPath(myPath): 
    # andra detta till er path
    mypath = myPath
    onlyfiles = [f for f in listdir(myPath) if isfile(join(myPath, f))]
    tempfilewithpath = []

    for f in onlyfiles:
        tempfilewithpath.append(myPath+f)

    return tempfilewithpath

def setUpContentImage(image):
    content_image_path = image #
    content_image = Image.open(content_image_path)
    content_image = content_image.resize((height, width))
    return content_image

def setUpStyleImage(image):
    style_image_path = image
    style_image = Image.open(style_image_path)
    style_image = style_image.resize((height, width))
    return style_image 

def createContentArray(content_image): 
    content_array = np.asarray(content_image, dtype='float32')
    content_array = np.expand_dims(content_array, axis=0)
    # Change content array to RGB - BGR
    content_array[:, :, :, 0] -= 103.939
    content_array[:, :, :, 1] -= 116.779
    content_array[:, :, :, 2] -= 123.68
    content_array = content_array[:, :, :, ::-1]
    return content_array

def createStyleArray(style_image): 
    style_array = np.asarray(style_image, dtype='float32')
    style_array = np.expand_dims(style_array, axis=0)
    # Change style array to RGB - BGR
    style_array[:, :, :, 0] -= 103.939
    style_array[:, :, :, 1] -= 116.779
    style_array[:, :, :, 2] -= 123.68
    style_array = style_array[:, :, :, ::-1]
    return style_array

# content loss function
def content_loss(content, combination):
    return backend.sum(backend.square(combination - content))

# Part of style loss logic
def gram_matrix(x):
    features = backend.batch_flatten(backend.permute_dimensions(x, (2, 0, 1)))
    gram = backend.dot(features, backend.transpose(features))
    return gram

# style loss function
def style_loss(style, combination):
    S = gram_matrix(style)
    C = gram_matrix(combination)
    channels = 3
    size = height * width
    return backend.sum(backend.square(S - C)) / (4. * (channels ** 2) * (size ** 2))   

def total_variation_loss(x):
    a = backend.square(x[:, :height-1, :width-1, :] - x[:, 1:, :width-1, :])
    b = backend.square(x[:, :height-1, :width-1, :] - x[:, :height-1, 1:, :])
    return backend.sum(backend.pow(a + b, 1.25))

def deprocess_image(x):
    x = x.reshape((height, width, 3))
    # Remove zero-center by mean pixel
    x[:, :, 0] += 103.939
    x[:, :, 1] += 116.779
    x[:, :, 2] += 123.68
    # 'BGR'->'RGB'
    x = x[:, :, ::-1]
    x = np.clip(x, 0, 255).astype('uint8')
    return x

def styleTransfere(iterations, content_image_file, style_image_file, imageprefix, _content_weight=0.025, _style_weight=5.0, _total_variation_weight=1.0):
	
	# crete content image and setup content array
    content_weight 			= _content_weight
    style_weight 			= _style_weight 
    total_variation_weight 	= _total_variation_weight

    content_weight_file_sufix =  str(int(content_weight * 100)) 
    style_weight_file_sufix =  str(int(style_weight)) 
    total_variation_weight_file_sufix =  str(int(total_variation_weight)) 

    content_image 	= setUpContentImage(content_image_file)
    content_array 	= createContentArray(content_image)
	# crete style image and setup style array
    style_image 	= setUpStyleImage(style_image_file)
    style_array 	= createStyleArray(style_image) 

    #define variables in Keras' backend
    content_image = backend.variable(content_array)
    style_image = backend.variable(style_array)
    combination_image = backend.placeholder((1, height, width, 3))

    # we concatenate all three image data into a single tensor VGG16
    input_tensor = backend.concatenate([content_image,
                                    style_image,
                                    combination_image], axis=0)
    # Keras model to use 
    model = VGG16(input_tensor=input_tensor, weights='imagenet',
              		include_top=False)

    # VGG16 layers
    layers = dict([(layer.name, layer.output) for layer in model.layers])
 
    layer_features = layers['block2_conv2'] # ['block4_conv2'], ['block5_conv1']
  
    content_image_features = layer_features[0, :, :, :]
    combination_features = layer_features[2, :, :, :]

    loss = backend.variable(0.)
    loss += content_weight * content_loss(content_image_features,
                                      combination_features)
    for layer_name in feature_layers:
        layer_features = layers[layer_name]
        style_features = layer_features[1, :, :, :]
        combination_features = layer_features[2, :, :, :]
        sl = style_loss(style_features, combination_features)
        loss += (style_weight / len(feature_layers)) * sl

    grads = backend.gradients(loss, combination_image)

    outputs = [loss]
    outputs += grads
    f_outputs = backend.function([combination_image], outputs)

    def eval_loss_and_grads(x):
        x = x.reshape((1, height, width, 3))
        outs = f_outputs([x])
        loss_value = outs[0]
        grad_values = outs[1].flatten().astype('float64') # float64
        return loss_value, grad_values

    x = np.random.uniform(0, 255, (1, height, width, 3)) - 128.

    iterations = iterations

    class Evaluator(object):

        def __init__(self):
            self.loss_value = None
            self.grads_values = None

        def loss(self, x):
            assert self.loss_value is None
            loss_value, grad_values = eval_loss_and_grads(x)
            self.loss_value = loss_value
            self.grad_values = grad_values
            return self.loss_value

        def grads(self, x):
            assert self.loss_value is not None
            grad_values = np.copy(self.grad_values)
            self.loss_value = None
            self.grad_values = None
            return grad_values

    # create the evaluator class
    evaluator = Evaluator()

    for i in range(iterations):
        print('Start of iteration', i+1)
        start_time = time.time()

        x, min_val, info = fmin_l_bfgs_b(evaluator.loss, x.flatten(),
                                     fprime=evaluator.grads, maxfun=20)

        print('Current loss value:', min_val)
        end_time = time.time()

        print('Iteration %d completed in %ds' % (i, end_time - start_time))
        img = deprocess_image(x.copy())
        img = Image.fromarray(img)
        fname = '%s_1_iteration_%d.jpg' % (imageprefix, i)
        img.save("./result/"+fname, "JPEG")
        print ('Saved image %s' % fname)
    
        if (i == 0):
            prolonged = int(end_time) - int(start_time)
            prolonged = (prolonged * iterations/60) 
            print ('The processes will take around %d minutes' % prolonged)

if __name__ == '__main__': main()
