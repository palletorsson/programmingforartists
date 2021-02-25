import rhinoscriptsyntax as rs
import scriptcontext as sc
import random as random
import Rhino

tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians


def createPipe(start, end):
    startPoint =  rs.AddPoint( start ) 
    endPoint =rs.AddPoint( end )
    pointdistance  = rs.Distance(start, end)
    crv = rs.AddLine(startPoint, endPoint)
    crv=rs.coercecurve(crv)
    rad=0.4
    pipes=Rhino.Geometry.Brep.CreatePipe(crv,(0.0,1.0),(rad,rad),True,0,False,tol,aTol)
    for pipe in pipes:    
        sc.doc.Objects.AddBrep(pipe)
    sc.doc.Views.Redraw()
    rs.AddSphere(start,rad)
    rs.AddSphere(end,rad)


def pointsToSphere(start, rad , color):
    startPoint=  rs.AddPoint( start ) 
    temp = rs.AddSphere(startPoint,rad)
    rs.ObjectColor(temp, color)

def addVector3(v1, v2):
    vTemp = [0,0,0]
    vTemp[1] = v1[1] + v2[1]
    vTemp[2] = v1[2] + v2[2]
    vTemp[0] = v1[0] + v2[0]
    print(vTemp)
    return vTemp


# x right, y away- , z -upp

origin = [0,0,0]
pointsToSphere(origin, 0.2, (255,255,255))
topEastNorth = [10,10,10]
topEastNorth2Down = [20,20,0]
five = [5,5,5]
topEastVestTwardsUp3 = [-10,-10,30]
pointsToSphere(topEastNorth, 0.2, (0,0,0))
DownEastNorth = [10,10,0]
pointsToSphere(DownEastNorth, 0.2, (0,0,0))

# x 
vectXEast = [2,0,0]
vectXVest = [-2,0,0]
# y
vectYAway = [0,2,0]
vectYTwards = [0,-2,0]
# z
vectZUp = [0,0, 2]
vectZDown = [0,0,-2]

# org
origin_XEast = addVector3(origin, vectXEast) 
pointsToSphere(origin_XEast , 0.2, (0,255,255))
origin_ZDown = addVector3(origin, vectZDown)  
origin_YAway = addVector3(origin, vectYAway) 
temp = addVector3(origin_XEast, origin_YAway) 
# ENU positions
ENU_YTwards = addVector3(topEastNorth, vectYTwards)
ENU_YAway = addVector3(topEastNorth, vectYAway)
ENU_XVest = addVector3(topEastNorth, vectXVest)
ENU_XEast = addVector3(topEastNorth, vectXEast)
ENU_ZUp = addVector3(topEastNorth, vectZUp)
ENU_ZDown = addVector3(topEastNorth, vectZDown)

# ENU2Down positions
ENU_YTwards2Down = addVector3(topEastNorth2Down, vectYTwards)
ENU_YAway2Down = addVector3(topEastNorth2Down, vectYAway)
ENU_XVest2Down = addVector3(topEastNorth2Down, vectXVest)
ENU_XEast2Down = addVector3(topEastNorth2Down, vectXEast)
ENU_ZUp2Down = addVector3(topEastNorth2Down, vectZUp)
ENU_ZDown2Down = addVector3(topEastNorth2Down, vectZDown)

# TECT3
#topEastVestTwardsUp3
TECT3_YTwards2Down = addVector3(topEastVestTwardsUp3, vectYTwards)
TECT3_YAway2Down = addVector3(topEastVestTwardsUp3, vectYAway)
TECT3_XVest2Down = addVector3(topEastVestTwardsUp3, vectXVest)
TECT3_XEast2Down = addVector3(topEastVestTwardsUp3, vectXEast)
TECT3_ZUp2Down = addVector3(topEastVestTwardsUp3, vectZUp)
TECT3_ZDown2Down = addVector3(topEastVestTwardsUp3, vectZDown)


#line_1 = [origin, topEastNorth]
#line_2 = [origin_XEast, topEastNorth_ZUp]
#line_3 = [origin_Up, topEastNorth_XVest]
createPipe(vectXEast, ENU_YTwards)
createPipe(vectYAway, ENU_XVest)
createPipe(vectYAway, ENU_YTwards)
createPipe(vectXEast, ENU_XVest)
createPipe(ENU_XVest, ENU_ZUp)
createPipe(ENU_YTwards, ENU_ZUp)
createPipe(ENU_XVest, ENU_ZDown)
createPipe(ENU_YTwards, ENU_ZDown)

createPipe(ENU_XEast, ENU_ZUp)
createPipe(ENU_YAway, ENU_ZUp)
createPipe(ENU_XEast, ENU_ZDown)
createPipe(ENU_YAway, ENU_ZDown)

createPipe(ENU_YAway, ENU_ZDown) 

createPipe(five, ENU_ZDown)


def testMovementPositions():
    pointsToSphere(vectXVest, 0.2, (255,0,0))
    pointsToSphere(vectXEast, 0.2, (255,0,0))
    pointsToSphere(vectYAway, 0.2, (0,255,0))
    pointsToSphere(vectYTwards, 0.2, (0,255,0))
    pointsToSphere(vectZUp, 0.2, (0,0,255))
    pointsToSphere(vectZDown, 0.2, (0,0,255))
    
def testENUPositions():
    pointsToSphere(ENU_YTwards , 0.2, (255,0,0))
    pointsToSphere(ENU_YAway, 0.2, (255,0,0))
    pointsToSphere(ENU_XVest, 0.2, (0,255,0))
    pointsToSphere(ENU_XEast, 0.2, (0,255,0))
    pointsToSphere(ENU_ZUp, 0.2, (0,0,255))
    pointsToSphere(ENU_ZDown, 0.2, (0,0,255))
    
#testMovementPositions()    
#testENUPositions()    
def testENU2DownPositions():
    pointsToSphere(ENU_YTwards2Down  , 0.2, (255,0,0))
    pointsToSphere(ENU_YAway2Down , 0.2, (255,0,0))
    pointsToSphere(ENU_XVest2Down , 0.2, (0,255,0))
    pointsToSphere(ENU_XEast2Down , 0.2, (0,255,0))
    pointsToSphere(ENU_ZUp2Down , 0.2, (0,0,255))
    pointsToSphere(ENU_ZDown2Down , 0.2, (0,0,255))
    
def TECT3Positions():
    pointsToSphere(TECT3_YTwards2Down  , 0.2, (255,0,0))
    pointsToSphere(TECT3_YAway2Down , 0.2, (255,0,0))
    pointsToSphere(TECT3_XVest2Down , 0.2, (0,255,0))
    pointsToSphere(TECT3_XEast2Down , 0.2, (0,255,0))
    pointsToSphere(TECT3_ZUp2Down , 0.2, (0,0,255))
    pointsToSphere(TECT3_ZDown2Down , 0.2, (0,0,255))
TECT3Positions()
 
#testENU2DownPositions()