#!/usr/bin/python
# -*- coding: UTF-8 -*-
import cv2
import sys
import xml.etree.ElementTree as ET

# Ändra till din bild för att testa
cascPath = "haarcascade_frontalface_default.xml"
tree = ET.parse(cascPath)
root = tree.getroot()
print root.tag
for child in root:
    print child.tag, child.attrib

for classifier in root.iter('internalNodes'):
    print(classifier.text)


#root.findall("./cascade/internalNodes")
