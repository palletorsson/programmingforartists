import rhinoscriptsyntax as rs
import random
import math 

segements = 40 # sides 
levelres = 2
radius = 30
depth = 2
origin = [0+random.random()*depth,0+random.random()*depth,0]
points = [] 
pointsRef = []
sides = 10
steps = 360/segements
theta = (2*math.pi)/segements
degrees = theta*(180/math.pi)
levels = 20
lofts = []
lastCircle = []

def createSegments():
    for i in range(levels):
        points = [] 
        origin = [0+random.random()*depth,0+random.random()*depth,i*levelres]
        point1 = rs.AddPoint(radius,0,i*levelres)
        points.append(point1)
        for i in range(1, segements):
            tempPoint = points[-1]
            tempOrgin = [origin[0] + random.random()*depth, origin[1] + random.random()*depth, origin[2]+1]
            newPt = rs.RotateObject(tempPoint,tempOrgin,degrees,None,True)
            points.append(newPt)
        points.append(point1)
        lastCircle.append(tempOrgin)
        polygon = rs.AddPolyline(points)
        lofts.append(polygon)
        return lofts
   

lofts = createSegments()
rs.AddLoftSrf(lofts, loft_type = 3) 
rs.AddPlanarSrf(lofts[0])