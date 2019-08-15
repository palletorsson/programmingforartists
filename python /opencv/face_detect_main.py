#!/usr/bin/python
# -*- coding: UTF-8 -*-
import cv2
import sys
# fler biblotek
from os import listdir
from os.path import isfile, join

import time
imageindex = 0;
cascPath = "./haarcascade_profileface.xml"
def main():
    img_name = 0;
	# Börja med att läsa och göra en lista av alla bilder
    filewithpath = getImagesPath()
    print filewithpath

    for imgpath in filewithpath:
        print imgpath
        image = cv2.imread(imgpath)

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        faces = detectFaces(image, gray, cascPath)
        cropFaces(faces, image)


def getImagesPath():
	# ändra detta till er path
    mypath = "/Users/pato/Documents/img/"
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
        scaleFactor=1.2,
        minNeighbors=4,
        minSize=(50, 50),
        #flags = cv2.cv.CV_HAAR_SCALE_IMAGE
    )

    print("Found {0} faces!".format(len(faces)))

    return faces

def cropFaces(faces, image):


    for (x, y, w, h) in faces:
        print "crop"
        imageindex = 1

        ts = str(time.time()).replace('.', '')
        crop_img = image[y-10:y+h+10, x-10:x+w+10]
        re_img = cv2.resize(crop_img,(int(256),int(256)))
        gray = cv2.cvtColor(re_img, cv2.COLOR_BGR2GRAY)
        faces = detectFaces(re_img, gray, cascPath)
        for (x,y,w,h) in faces:
            cv2.rectangle(re_img,(x,y),(x+w,y+h),(0,255,0),4)
            print "rect"
        # Draw a rectangle around the faces
        # scv2.rectangle(image, (10, 10), (255, 255), (0, 255, 0), 2)
        cv2.imwrite("./facesp/"+ts+str(imageindex)+'.jpg', re_img)
        imageindex = imageindex + 1



if __name__ == '__main__': main()
