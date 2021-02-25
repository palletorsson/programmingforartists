# this creates random branching lines with recursion
# input type: line - Line (Item Access)
import rhinoscriptsyntax as rs
import Rhino.Geometry as rg
import random
import Rhino
import scriptcontext as sc

tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians

lineList = []

def recursiveLine(line, depth):
    startPoint =  rs.AddPoint( start ) 
    endPoint =rs.AddPoint( end )
    crv = rs.AddLine(startPoint, endPoint)
    dir1 = rg.Vector3d(pt2.X-pt1.X, pt2.Y-pt1.Y, pt2.Z-pt1.Z)
    dir2 = rg.Vector3d(dir1) # copy

    dir1.Rotate(random.random()*0.4+0.1, rg.Vector3d.ZAxis) # random angle
    dir2.Rotate(random.random()*-0.4-0.1, rg.Vector3d.ZAxis)
    dir1 *= random.random()*0.2 + 0.8; # random scale
    dir2 *= random.random()*0.2 + 0.8;
    line1 = rg.Line(pt2, pt2+dir1)
    line2 = rg.Line(pt2, pt2+dir2)
    resultList.append(line1)
    resultList.append(line2)
    if(depth>0):
        if(random.random()<0.9): # random omission
            recursiveLine(line1, depth-1, resultList)
        if(random.random()<0.8): # random omission
            recursiveLine(line2, depth-1, resultList)

def createPipe(start, end):
    startPoint =  rs.AddPoint( start ) 
    endPoint =rs.AddPoint( end )
    crv = rs.AddLine(startPoint, endPoint)
    crv=rs.coercecurve(crv)
    rad=0.4
    pipes=Rhino.Geometry.Brep.CreatePipe(crv,(0.0,1.0),(rad,rad),True,0,False,tol,aTol)
    for pipe in pipes:    
        sc.doc.Objects.AddBrep(pipe)
    sc.doc.Views.Redraw()
    rs.AddSphere(start,rad)
    rs.AddSphere(end,rad)

start = [0,0,0]
end = [0,2,0] 

startPoint =  rs.AddPoint( start ) 
endPoint = rs.AddPoint( end )
line = rs.AddLine(startPoint, endPoint)

result = []
recursiveLine(line, 10)
pipes = []
for line in result: 
    print(line)
    createPipe(line[0], line[1])