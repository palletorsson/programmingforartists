import rhinoscriptsyntax as rs
import random

quantity = 10

def createPoints(quantity, y):
    myPoints = []

    for x in range(quantity):
        myTempPoint = rs.AddPoint( (x*quantity,y*quantity,random.random()*quantity) )
        myPoints.append(myTempPoint)

    return myPoints
    
for i in range(quantity):
    multiLine = createPoints(quantity, i)
    for point in multiLine: 
        rs.AddSphere(point, quantity)

