from PIL import Image
import os
iterations = 900
prefix = 'q'
angle = 2
path = 'anim/'

for i in range(iterations):
    last = i-1
    im1 = Image.open(path+prefix+str(last)+".jpg")
    rot = im1.rotate(angle) 
    name = path+prefix+str(i)+".jpg"
    rot.save(name, "JPEG", quality=12)

for filename in os.listdir(path):
    prefix = filename[:1]
    midfix = filename[1:].split('.')
    parts = filename.split('.')    
    if int(midfix[0]) < 10: 
        cpre = "000"
    elif int(midfix[0]) < 100:
        cpre = "00"
    elif int(midfix[0]) < 1000:
        cpre = "0"
    else: 
        cpre = ""
    
    new_filename = prefix+str(cpre)+str(midfix[0])+"."+midfix[1]
    os.rename(os.path.join(path, filename), os.path.join(path, new_filename))
