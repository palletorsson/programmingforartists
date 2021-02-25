import rhinoscriptsyntax as rs
import random
import math 
import Rhino
import scriptcontext as sc
tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians
sizeX = 5
sizeY = 5
sizeZ = 10
points = []

this_point = []
next_point = []
prev_point = []


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
    if(rad < 0.3): 
        rs.AddSphere(end,0.5)


print(math.floor(sizeX/2-1))
# move pip three up
posX = random.randrange(math.floor(sizeX/2-1), math.floor(sizeX/2+1))
posY = random.randrange(math.floor(sizeY/2-1), math.floor(sizeY/2+1))
pos = [posX, posY, 0]
myTempPoint = rs.AddPoint(pos)
points.append(myTempPoint)
posX = random.randrange(math.floor(sizeX/2-1), math.floor(sizeX/2+1))
posY = random.randrange(math.floor(sizeY/2-1), math.floor(sizeY/2+1))
pos = [posX, posY, 3]
myTempPoint = rs.AddPoint(pos)
points.append(myTempPoint)


def firstVect():
    posX = random.randrange(math.floor(sizeX/2-1), math.floor(sizeX/2+1))
    posY = random.randrange(math.floor(sizeY/2-1), math.floor(sizeY/2+1))
    vect = [posX, posY, 0]
    return vect

def newVector(vector, elevate):
    posX = vector[0] + random.randrange(-2, 2)
    posY = vector[1] + random.randrange(-2, 2)
    elevate = vector[2] + elevate + random.randrange(-1, 1)
    vect = [posX, posY, elevate]
    return vect

vAll = []
def createThreeArrays(): 
    for one_0 in range(1):
        v_0 = firstVect()
        vAll.append(v_0)
        for one_1 in range(1): 
            v_1 = newVector(v_0, 3) 
            vAll.append(v_1)
            for three_2 in range(3): 
                v_2 = newVector(v_1, 3) 
                vAll.append(v_2)
                for three_3 in range(3):
                    v_3 = newVector(v_2,  3) 
                    vAll.append(v_3)
                    for three_4 in range(3):
                        v_4 = newVector(v_3,  3) 
                        vAll.append(v_4)
    return vAll

v4 = createThreeArrays()
print(v4)

index = 0
radbase = 0.8
def buildFromArray(vectorlist, index, radbase):
    print(vectorlist)
    for one_0 in range(1):
        v_0 = vectorlist[index]
        index=index+1 
        radbase = radbase - 0.1
        for one_1 in range(1): 
            v_1 = vectorlist[index]            
            createPipe(v_0, v_1, radbase)
            print(index)
            index=index+1  
            radbase = radbase - 0.1
            for three_2 in range(3): 
                v_2 = vectorlist[index]
                print(index, v_1, v_2)
                createPipe(v_1, v_2, radbase)
                index=index+1
                if three_2 == 0:
                    radbase = radbase - 0.1
                for three_3 in range(3):
                    v_3 = vectorlist[index]
                    print(v_3)
                    createPipe(v_2, v_3, radbase)
                    index=index+1
                    if three_3 == 0:
                        radbase = radbase - 0.1
                    for three_4 in range(3):
                        v_4 = vectorlist[index]
                        print(v_4)
                        createPipe(v_3, v_4, radbase)
                        index=index+1

buildFromArray(v4, index, radbase)


def addXyVector(v1, v2):
    v1[0] = v1[0] + v2[0]
    v1[1] = v1[1] + v2[1]
    return v1


def cloud():
    for z in range(sizeZ):
        for x in range(sizeY): 
            for y in range(sizeY): 
                pos = [x, y, z]
                myTempPoint = rs.AddPoint(pos)

