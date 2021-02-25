# create a form that grows from a rectangle in an out again
import rhinoscriptsyntax as rs
import random 
# create poins and lines, connect the line and close the surface
# start points
# 
points = [[0,-1,-1],[0,1,-1],[0,1,1],[0,-1,1],[0,-1,-1]]
vectors = points

def segments(): 
    polypoints = []
    for p in points:
        myTempPoint = rs.AddPoint(p)
        
        polypoints.append(myTempPoint)
    polyline = rs.AddPolyline(polypoints)
    ind = 0
    polypoints = []
    for z in range(30):
        rand = random.randint(1, 4)
        polypoints = []
        ind = ind  + 1
        for p in points:
            p[0] = p[0] + 1
        rand = random.randint(0, 3)
        points[rand] = addVector(points[rand], vectors[rand])
        points[0] = points[4]
        for p in points:
            p[0] = ind
        polypoints.append(points[0])
        polyline = rs.AddPolyline(points)

def addVector(v1, v2):
    v1[1] = v1[1] + v2[1]/2
    v1[2] = v1[2] + v2[2]/2
    return v1

segments()

