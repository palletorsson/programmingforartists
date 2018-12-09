import rhinoscriptsyntax as rs
import random

quantity = 10
count = 0
target = 10 
def firstLine(quantity):
    myPoints = []

    for x in range(quantity):
        myTempPoint = rs.CreatePoint( (x*quantity,  0, quantity*random.random()) )
        myPoints.append(myTempPoint)
    return myPoints

def followingLines(currentLine, quantity, y, count):
    myPoints = []
    for point in currentLine:
        print point.X
        myTempPoint = rs.CreatePoint( (point.X, count*quantity, point.Z+random.random()*2) )
        myPoints.append(myTempPoint)
        
    for point in myPoints: 
        rs.AddSphere(point, quantity)
    count = count + 1
    if(count < target): 
        followingLines(myPoints, quantity, count, count )

myFirstLine = firstLine(10)  
followingLines(myFirstLine, 10, 1, count)
  


