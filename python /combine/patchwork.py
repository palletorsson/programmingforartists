#!/usr/bin/python
# -*- coding: UTF-8 -*-
import sys
from PIL import Image
from os import listdir
from os.path import isfile, join

def main():
    # vi behöver variabler så vi kan iterera och skapa vår bild
    smalnum = 0;
    columns = 8
    y_offset = 8
    x_offset = 8
    count = 0;
    fromNumber = 0
    toNumber = 16
    base = 16
    resized = 256
    padding = 10
    myPath = "./img/"
    filewithpath = getImagesPath(myPath)

    if smalnum == 1:
        images = map(Image.open, filewithpath)
        widths, heights = (8 + 128) * 8
        total_width = getTotalWidth(images, resized, padding)
        max_height = getMaxHeight(heights, total_width, columns, padding)

    else:
        # har skapar vi först en vertikal uppsättning bilder med 16 bilder
        fileLength = len(filewithpath)/16
        print fileLength
        for n in range(fileLength):
            images = map(Image.open, filewithpath[fromNumber:toNumber])
            new_im = Image.new('RGB', (256+32, (256*17+32)))
            for im in images:
                #im = im.resize((resized, resized), Image.ANTIALIAS)
                new_im.paste(im, (16, x_offset))
                x_offset += 256+16

            new_im.save("./vertical/"+str(toNumber)+'.jpg')
            x_offset = 8
            fromNumber = fromNumber + base
            toNumber = toNumber + base
            print fromNumber, toNumber
            
        # efter att skapat våra vertikala bilder sätter vi hop dem
        filewithpath = getImagesPath("./vertical/")
        fileLength = len(filewithpath)
        images = map(Image.open, filewithpath)
        new_im = Image.new('RGB', ((256+32)*fileLength, 256*17+32))
        for im in images:
            new_im.paste(im, (x_offset, 0))
            x_offset += 256+16
        new_im.save("final.jpg")



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
