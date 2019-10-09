#!/usr/bin/python
# -*- coding: UTF-8 -*-
import cv2
import sys

# Ändra till din bild för att testa
imagePath = "./pict.jpg"
cascPath = "haarcascade_frontalface_default.xml"

# 1. skapa haar cascade
faceCascade = cv2.CascadeClassifier(cascPath)

# 2. Läs bilden gör om den till gråsskala
image = cv2.imread(imagePath)
print image
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# 3. Kör igenkänningen
faces = faceCascade.detectMultiScale(
    gray,
    scaleFactor=1.1,
    minNeighbors=5,
    minSize=(100, 100),
    #flags = cv2.cv.CV_HAAR_SCALE_IMAGE
)

print("Found {0} faces!".format(len(faces)))

# 4. skapa en bild av "ansiktet"
for (x, y, w, h) in faces:
    cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)
    crop_img = image[y:y+h, x:x+w]
    cv2.imwrite(str(x)+str(y)+str(w)+str(h)+'.jpg', crop_img)

# 5. visa och spara bilden
cv2.imshow("Faces found", image)
cv2.imwrite('result.jpg',image)
cv2.waitKey(0)
