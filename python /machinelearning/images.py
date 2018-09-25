import numpy as np
from keras.applications.vgg16 import vgg16, preprocess_input
from keras import backend as K
from keras.preprocessing.image import load_img, img_to_array
from natural_style import * 

# varables
base_image_path = './base_image.jpg'
style_image_path = './style_image.jpg'
image_output = './output.jpg'
content_weight = 0.025

targetHeight = 512
targetWidth = 512
targetSize = (targetHeight, targetWidth)


def img_process(img_path, target_size):  
    pImage = load_img(path=img_path, target_size=target_size)
    pImgArr = img_to_array(pImage)
    pImgArr = K.variable(preprocess_input(np.expand_dims(pImgArr, axis=0)), dtype='float32')
    return pImgArr


def get_total_loss(gImgPlaceholder, alpha=1.0, beta=10000.0):
    F = get_feature_reps(gImPlaceholder, layer_names=[cLayerName], model=gModel)[0]
    Gs = get_feature_reps(gImPlaceholder, layer_names=sLayerNames, model=gModel)
    contentLoss = get_content_loss(F, P)
    styleLoss = get_style_loss(ws, Gs, As)
    totalLoss = alpha*contentLoss + beta*styleLoss
    return totalLoss

def content_loss(base, combination):
    return K.sum(K.square(combination - base))

def style_loss(style, combination):
    assert K.ndim(style) == 3
    assert K.ndim(combination) == 3
    S = gram_matrix(style)
    C = gram_matrix(combination)
    channels = 3
    size = img_nrows * img_ncols
    return K.sum(K.square(S - C)) / (4. * (channels ** 2) * (size ** 2))

base_image = K.variable(img_process(base_image_path, targetSize))
style_image = K.variable(img_process(style_image_path, targetSize))
combination_image = K.placeholder((1,512,512,3)) # img_eidth, img_height

input_tensor = K.concatenate([base_image, style_image, combination_image], axis=0)

model = vgg16.VGG16(input_tensor=input_tensor, 
					weights='imagenet', include_top=False)

print('Model loaded')

# get the symbolic outputs of each "key" layer (we gave them unique names).
outputs_dict = dict([(layer.name, layer.output) for layer in model.layers])

# combine these loss functions into a single scalar
loss = K.variable(0.)
layer_features = outputs_dict['block5_conv2']
base_image_features = layer_features[0, :, :, :]
combination_features = layer_features[2, :, :, :]
loss += content_weight * content_loss(base_image,
                                      combination_image)

feature_layers = ['block1_conv1', 'block2_conv1',
                  'block3_conv1', 'block4_conv1',
                  'block5_conv1']

for layer_name in feature_layers:
    layer_features = outputs_dict[layer_name]
    style_reference_features = layer_features[1, :, :, :]
    combination_features = layer_features[2, :, :, :]
    sl = style_loss(style_reference_features, combination_features)
    loss += (style_weight / len(feature_layers)) * sl
loss += total_variation_weight * total_variation_loss(combination_image)

print loss

grads = K.gradients(loss, combination_image)
print grads


x = preprocess_image(base_image_path)

for i in range(iterations):
    print('Start of iteration', i)
    start_time = time.time()
    x, min_val, info = fmin_l_bfgs_b(evaluator.loss, x.flatten(),
                                     fprime=evaluator.grads, maxfun=20)
    print('Current loss value:', min_val)
    # save current generated image
    img = deprocess_image(x.copy())
    fname = result_prefix + '_at_iteration_%d.png' % i
    save_img(fname, img)
    end_time = time.time()
    print('Image saved as', fname)
    print('Iteration %d completed in %ds' % (i, end_time - start_time))