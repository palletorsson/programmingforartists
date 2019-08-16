#!/usr/bin/python
# -*- coding: UTF-8 -*-
import cv2
import sys
# fler biblotek
from os import listdir
from os.path import isfile, join
import random

import time
imageindex = 0;
# cascPath = "./haarcascade_profileface.xml"
cascPath = "haarcascade_frontalface_default.xml"
def main():
    img_name = 0;
	# Börja med att läsa och göra en lista av alla bilder
    filewithpath = getImagesPath()

    # för varje bild letar vi ansikten och sparar resultatet
    for imgpath in filewithpath:
        image = cv2.imread(imgpath)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        # först hittar kordinaterna för alla bilder
        faces = detectFaces(image, gray, cascPath)
        # sedan tar vi alla bild och sparar ner
        cropFaces(faces, image)


def getImagesPath():
	# ändra detta till er path
    mypath = "./images/"
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    tempfilewithpath = []
    for f in onlyfiles:
        tempfilewithpath.append(mypath+f)

    return tempfilewithpath

def detectFaces(image, gray, cascPath):
    # skapa haar cascade
    faceCascade = cv2.CascadeClassifier(cascPath)
    # hitta ansikten
    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(100, 100),
        #flags = cv2.cv.CV_HAAR_SCALE_IMAGE
    )
    print("Found {0} faces!".format(len(faces)))
    return faces

def cropFaces(faces, image):
    for (x, y, w, h) in faces:
        crop_img = image[y-10:y+h+10, x-10:x+w+10]
        for (x,y,w,h) in faces:
            cv2.rectangle(crop_img,(x,y),(x+w,y+h),(0,255,0),4)
        # skapa bildnamn och bild
        ts = str(time.time()).replace('.', '')
        r = str(random.randint(1,101))
        cv2.imwrite("./facesp/"+ts+r+'.jpg', crop_img)

if __name__ == '__main__': main()
