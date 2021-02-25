import rhinoscriptsyntax as rs
import scriptcontext as sc
import random as random
import Rhino


tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians

point_start = [0,100,0]
point_end = [10,1,1] 
   
def createPipe(start, end):
    startPoint =  rs.AddPoint( point_start ) #rs.coerce3dpoint(point_start, True)
    endPoint =rs.AddPoint( point_end )
    crv = rs.AddLine(startPoint, endPoint)
    crv=rs.coercecurve(crv)
    rad=0.1
    pipes=Rhino.Geometry.Brep.CreatePipe(crv,(0.0,1.0),(rad,rad),True,0,False,tol,aTol)
    for pipe in pipes:    
        sc.doc.Objects.AddBrep(pipe)
    sc.doc.Views.Redraw()

r = 7
adding = 1
prob = 0.33

def createFirstLevel():
    levelpoints = [] 
    for x in range(r): 
        for y in range(r): 
            point= [x,y,0]
            rs.AddPoint(point)
            levelpoints.append(point)
    return levelpoints

firstlvl = createFirstLevel()
print(firstlvl) 

def createNextLevel(prevLevel, ran):
    levelpoints = [] 
    for x in range(r): 
        for y in range(r): 
            pos = (x * r) + y
            point = prevLevel[pos]
            point[0] = point[0] + ( random.random() * ran ) - ran/2
            point[1] = point[1] + ( random.random() * ran ) - ran/2
            point[2] = point[2] + ( random.random() * ran ) - ran/2
            rs.AddPoint(point)
            levelpoints.append(point)


    return levelpoints

def createAllLevels(nextLvl, count=0):
    print count
    if(count < 3):
        next = createNextLevel(nextLvl, count * 0.1)
        createAllLevels(next, count+1)
        print(next)


createAllLevels(firstlvl)

def iterlevel():  
    for x in range(r): 
        for y in range(r): 
            point_start = [x,y,z]
            rand = random.random()

            if rand > prob:
                point_end = [x+adding,y,z+adding] 
                createPipe(point_start, point_end)
         
            rand = random.random()
            if rand > 0:
                point_end = [x,y,z+adding]
                createPipe(point_start, point_end)
            
            rand = random.random()
            if rand > prob:
                point_end = [x,y+adding,z+adding]
                createPipe(point_start, point_end)
            
            rand = random.random()
            if rand > prob:
                point_end = [x+adding,y+adding,z+adding]
                createPipe(point_start, point_end)
            
            rand = random.random()
            if rand > prob:
                point_end = [x-adding,y,z-adding]
                createPipe(point_start, point_end)
            
            rand = random.random()
            if rand > 0:
                point_end = [x,y,z-adding]
                createPipe(point_start, point_end)
             
            rand = random.random()
            if rand > prob:
                point_end = [x,y-adding,z-adding]
                createPipe(point_start, point_end)
                
            rand = random.random()
            if rand > prob:
                point_end = [x-adding,y-adding,z-adding]
                createPipe(point_start, point_end)
               
               

