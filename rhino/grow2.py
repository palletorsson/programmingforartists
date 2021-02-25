# create a form that grows from a rectangle in an out again
import rhinoscriptsyntax as rs
import random 
# create poins and lines, connect the line and close the surface
# start points
# 
points = []
vectors = points
startPoint = [0,0,0]
elementVect = [0,0,4] 
def segments(): 
    tPoint = rs.AddPoint(startPoint)
    points.append(tPoint)
    newVect = addRandVector(startPoint, elementVect)
    tPoint = rs.AddPoint(newVect)
    points.append(newVect)
    for x range(3):
        


def addRandVector(v1, v2):
    v1[0] = v1[0] + v2[0]
    v1[1] = v1[1] + v2[1]
    v1[2] = v1[2] + v2[2]
    return v1
    
segments()

