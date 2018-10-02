import sys
from PIL import Image
from os import listdir
from os.path import isfile, join

def main():
    columns = 16
    y_offset = 8
    x_offset = 8 
    count = 0
    resized = 180 
    padding = 10
    myPath = "./img/"
    filewithpath = getImagesPath(myPath)
    images = map(Image.open, filewithpath)
    widths, heights = zip(*(i.size for i in images))
    total_width = getTotalWidth(images, resized, padding)
    max_height = getMaxHeight(heights, total_width, columns, padding)

    new_im = Image.new('RGB', (total_width, max_height))

    for im in images:
        im = im.resize((resized, resized ), Image.ANTIALIAS)
        new_im.paste(im, (x_offset, y_offset))
        x_offset += im.size[0]+padding
        count = count + 1
        if count % columns == 0:
            x_offset = padding 
            y_offset += resized + padding

    new_im.save('test.jpg')

def getImagesPath(myPath): 
	# andra detta till er path
    mypath = myPath
    onlyfiles = [f for f in listdir(myPath) if isfile(join(myPath, f))]
    tempfilewithpath = []

    for f in onlyfiles:
        tempfilewithpath.append(myPath+f)

    return tempfilewithpath

def getTotalWidth(images, resized, padding): 
	return (resized + padding) * len(images) / 3 

def getMaxHeight(heights, total_width, columns, padding): 
    rows = total_width / (columns+(padding*2))
    max_height = (sum(heights) / columns * 2) + 100
    return max_height

if __name__ == '__main__': main()