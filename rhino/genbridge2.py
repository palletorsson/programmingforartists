import rhinoscriptsyntax as rs
import Rhino
import random as random
import scriptcontext as sc
tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians

area_1 = [0.0, 4.0]
area_2 = [80.0, 84.0]
area_3 = [40.0, 44.0, -1.0]
mid =rs.AddPoint( area_3 )
def createPipe(start, end, rad):
    startPoint =  rs.AddPoint( start ) #rs.coerce3dpoint(point_start, True)
    endPoint =rs.AddPoint( end )
    crv = rs.AddLine(startPoint, endPoint)
    crv=rs.coercecurve(crv)
    pipes=Rhino.Geometry.Brep.CreatePipe(crv,(0.0,1.0),(rad,rad),True,0,False,tol,aTol)
    for pipe in pipes:    
        sc.doc.Objects.AddBrep(pipe)
    sc.doc.Views.Redraw()
    rs.AddSphere(start,rad)
    rs.AddSphere(end,rad)


startPosX = random.uniform(area_1[0], area_1[1])
startPosY = random.uniform(area_1[0], area_1[1])
startPos = [startPosX, startPosY, 0]
startPoint = rs.AddPoint(startPos)
startPosLow = [startPosX, startPosY, -3]
startPointLow = rs.AddPoint(startPosLow)
endPosX = random.uniform(area_2[0], area_2[1])
endPosY = random.uniform(area_2[0], area_2[1])
endPos = [endPosX, endPosY, 0]
endPoint = rs.AddPoint(endPos)
endPosLow = [endPosX, endPosY, 0]
endPointLow = rs.AddPoint(endPosLow)

def getNewPoint(vect, goal, elevate): 
    orgDist = rs.Distance(vect, goal)
    for x in range(5): 
        newVect = newVector(vect, elevate)
        newDist = rs.Distance(newVect, goal)
        #print(orgDist,newDist)
        if (orgDist > newDist): 
            vect = newVect
    return vect      

def newVector(vector, elevate):
    posX = vector[0] + random.uniform(-1.0, 4.0)
    posY = vector[1] + random.uniform(-1.0, 4.0)
    elevate = vector[2] + random.uniform(-1.0, 5.0)
    vect = [posX, posY, elevate]
    return vect

def getDistance(vect1, vect2): 
    v1 = rs.AddPoint(vect1)
    v2 = rs.AddPoint(vect2)
    dist = rs.Distance(v1, v2)
    return dist

polyline = [] 
polyline.append(startPos)   
for x in range(6): 
    if (x > 3): 
        elevate = -2
    else: 
        elevate = 3
    newPos = getNewPoint(startPos, endPos, elevate)
    print(newPos)
    tempPoint = rs.AddPoint(newPos)
    polyline.append(tempPoint)
    startPos = newPos
    if (x > 0): 
        if (x > 4): 
            createPipe(tempPoint, mid, 2.4)
        else: 
            createPipe(tempPoint, mid, 2.4)
    
polyline.append(endPoint)
rad = 2.2
polycurve = rs.AddCurve(polyline)
crv=rs.coercecurve(polycurve)
pipes=Rhino.Geometry.Brep.CreatePipe(crv,(0.0,1.0),(rad,rad),True,0,False,tol,aTol)
for pipe in pipes:    
    sc.doc.Objects.AddBrep(pipe)
sc.doc.Views.Redraw()

