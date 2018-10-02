#!/usr/bin/python 
# -*- coding: UTF-8 -*-
import cv2
import sys
# fler biblotek
from os import listdir
from os.path import isfile, join

def main():
	# Börja med att läsa och göra en lista av alla bilder 
    filewithpath = getImagesPath()
    print filewithpath
    cascPath = "haarcascade_frontalface_default.xml"
    for imgpath in filewithpath:
        image = cv2.imread(imgpath)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        faces = detectFaces(image, gray, cascPath)
        print faces
        cropFaces(faces, image)
    

def getImagesPath(): 
	# ändra detta till er path
    mypath = "/Users/pato/Documents/python/scrape/img/"
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    tempfilewithpath = []

    for f in onlyfiles:
        tempfilewithpath.append(mypath+f)

    return tempfilewithpath

def detectFaces(image, gray, cascPath):    
    # Create the haar cascade
    faceCascade = cv2.CascadeClassifier(cascPath)

    # Detect faces in the image
    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(30, 30),
        #flags = cv2.cv.CV_HAAR_SCALE_IMAGE
    )

    print("Found {0} faces!".format(len(faces)))
    return faces

def cropFaces(faces, image):
    # Draw a rectangle around the faces
    for (x, y, w, h) in faces:
        #cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)
        crop_img = image[y:y+h, x:x+w]
        cv2.imwrite(str(x)+str(y)+str(w)+str(h)+'.jpg', crop_img)


if __name__ == '__main__': main()
