import rhinoscriptsyntax as rs
import random

def getPoint(_pt, points): 
    fx = random.randint(-1,1)
    newPoint = _pt + fx 
    if(abs(newPoint) > bound):
        return 'next' 
    for p in points: 
        if newPoint in points: 
            return 'next'
        else:        
           return newPoint

def setOrigin():
    x = 0
    y = 0
    z = 0 
    ptOrigin = [x,y,z]
    return ptOrigin

ptCurrent = setOrigin() 

bound = 10

pts = []
xPoints = []
yPoints = []
pts.append(ptCurrent)
xPoints.append(ptCurrent[0])
yPoints.append(ptCurrent[1])
circleZero = rs.AddSphere(ptCurrent,1.0)
strands = 10

def runSequence1(): 
    ptCurrent = setOrigin() 
    for i in range(0,30):
        oldpt = rs.AddPoint((ptCurrent[0],ptCurrent[1],ptCurrent[2]))
        addNewPoint = False 
        xPoint = getPoint(ptCurrent[0], xPoints)
        
        if xPoint != 'next': 
            ptCurrent[0] = xPoint
            xPoints.append(ptCurrent[0])
            addNewPoint = True
        
        yPoint = getPoint(ptCurrent[1], yPoints)
        if yPoint != 'next': 
            ptCurrent[1] = yPoint
            yPoints.append(ptCurrent[1])
            addNewPoint = True    
    
        if (addNewPoint):
            newPt = rs.MoveObject(oldpt, ptCurrent)
            rs.AddSphere(newPt,2.0)
            pts.append(ptCurrent)


def runSequence2(): 
    ptCurrent = setOrigin() 
    for i in pts:
        thispt = rs.AddPoint((pts[i]))
        addNewPoint = False 
        xPoint = getPoint(ptCurrent[0], xPoints)
        
        if xPoint != 'next': 
            ptCurrent[0] = xPoint
            xPoints.append(ptCurrent[0])
            addNewPoint = True
        
        yPoint = getPoint(ptCurrent[1], yPoints)
        if yPoint != 'next': 
            ptCurrent[1] = yPoint
            yPoints.append(ptCurrent[1])
            addNewPoint = True    
    
        if (addNewPoint):
            newPt = rs.MoveObject(oldpt, ptCurrent)
            rs.AddSphere(newPt,2.0)
            #pts.append(ptCurrent)
runSequence1()
print pts
