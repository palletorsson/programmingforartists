import rhinoscriptsyntax as rs
import random
import Rhino
import scriptcontext as sc
tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians

start_vect = [0,0,0]
next_vect = start_vect
points = []
points.append(start_vect)

def updateVect(start_vect): 
    x = start_vect[0] + random.randint(-20, 30)
    y = start_vect[1] + random.randint(-20, 30)
    z = start_vect[2] + random.randint(-20, 30)
    if(z < 0): 
        z = 0
    if(z > 20): 
        z = 20
    if(x > 20): 
        x = 20
    if(x < -20): 
        x = -20
    if(y > 20): 
        y = 20
    if(y < -20): 
        y = -20
    return [x,y,z]


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
    
    
for x in range(200):
    next_vext = start_vect  
    start_vect = updateVect(start_vect)
    points.append(start_vect)

print(points)

for n in range(199):
    n_vect = points[n+1]  
    s_vect = points[n]
    if(n_vect != s_vect): 
        createPipe(n_vect, s_vect, 1.0)
