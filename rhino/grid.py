import rhinoscriptsyntax as rs
#import random

# flytta listan for att spara punkterna in i funktionen

quantity = 10
patchWork = []
#random.random()
# skapa en funktion for att skapa en linje
def createLine(quantity, y):
    myPoints = []

    for x in range(quantity):
        myTempPoint = rs.AddPoint( (x*10,y*10,0) )
        myPoints.append(myTempPoint)

    polyline = rs.AddPolyline(myPoints)
    return polyline

# loopa ut linjerna 
for i in range(10):
    multiLine = createLine(quantity, i)
    patchWork.append(multiLine)

#nu kan vi anvanda vara linjer for att skapa en "loft"
p = rs.AddLoftSrf(patchWork)