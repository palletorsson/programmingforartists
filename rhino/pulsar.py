import rhinoscriptsyntax as rs
import random

path = "data/pulsar.csv.txt"
values_array = []
run = 1
index = 0

def read_csv(path):
    f = open(path, 'r')
    for line in f.readlines():
        values = line.strip().split(',')
        values_array.append(values)
        print(values)
    f.close()
    
read_csv(path)

quantity = 300
patchWork = []
# skapa en funktion for att skapa en linje
def createLine(quantity, y):
    myPoints = []
    addPoints = values_array[y]
    for x in range(quantity):
        myTempPoint = rs.AddPoint( (x*10,y*10,float(addPoints[x])*10) )
        myPoints.append(myTempPoint)
    polyline = rs.AddPolyline(myPoints)
    return polyline

if run == 1:
    for i in range(80):
        multiLine = createLine(quantity, i)
        patchWork.append(multiLine)

p = rs.AddLoftSrf(patchWork)

