import sys
from PIL import Image
from os import listdir
from os.path import isfile, join

mypath = "./img"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
print onlyfiles

filewithpath = []
for f in onlyfiles:
    filewithpath.append(mypath+"/"+f)

print filewithpath
images = map(Image.open, filewithpath)
widths, heights = zip(*(i.size for i in images))

total_width = sum(widths)
max_height = max(heights)

new_im = Image.new('RGB', (total_width, max_height))

x_offset = 0
for im in images:
  new_im.paste(im, (x_offset,0))
  x_offset += im.size[0]

new_im.save('test.jpg')