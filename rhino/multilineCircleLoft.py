import rhinoscriptsyntax as rs
import random
# skapa en lista for att spara punkterna

quantity = 10
patchWork = []

def createLine(quantity, y):
    myPoints = []

    for x in range(quantity):
        myTempPoint = rs.AddPoint( (x*10,y*10,random.random()*10) )
        myPoints.append(myTempPoint)

    polyline = rs.AddPolyline(myPoints)
    return polyline

for i in range(10):
    multiLine = createLine(quantity, i)
    patchWork.append(multiLine)

#nu kan vi anvanda vara linjer for att skapa en "loft"
p = rs.AddLoftSrf(patchWork)

