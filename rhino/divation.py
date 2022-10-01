import rhinoscriptsyntax as rs
import scriptcontext as sc
import random as random
import Rhino

tol=sc.doc.ModelAbsoluteTolerance
aTol=sc.doc.ModelAngleToleranceRadians

point_start = [0,100,0]
point_end = [10,1,1] 
   
def createPipe(start, end):
    startPoint =  rs.AddPoint( start ) 
    endPoint =rs.AddPoint( end )
    pointdistance  = rs.Distance(start, end)
    if (pointdistance < 3): 
        crv = rs.AddLine(startPoint, endPoint)
        crv=rs.coercecurve(crv)
        rad=0.1
        pipes=Rhino.Geometry.Brep.CreatePipe(crv,(0.0,1.0),(rad,rad),True,0,False,tol,aTol)
        for pipe in pipes:    
            sc.doc.Objects.AddBrep(pipe)
        sc.doc.Views.Redraw()
        rs.AddSphere(start,rad)
        rs.AddSphere(end,rad)
    
r = 7
r2 = 13
adding = 1
prob = 0.0
allLvls = []

def createFirstLevel():
    levelpoints = [] 
    for x in range(r2): 
        for y in range(r): 
            point= [x,y,0]
            rs.AddPoint(point)
            levelpoints.append(point)
    return levelpoints

firstlvl = createFirstLevel()

allLvls.append(firstlvl)
divation = 0
def createNextLevel(prevLevel):
    levelpoints = [] 
    createlvl = prevLevel[:]
    div = 0
    for x in range(r2):
        if(x > 2):
            div = div + 0.15
        for y in range(r): 
            pos = (x * r) + y
            point = createlvl[pos]
            pointtemp = [point[0] + ( random.random() * div ) - div/2, point[1] + ( random.random() * div ) - div/2, point[2] + ( random.random() * div ) - div/2 + 1]
            rs.AddPoint(pointtemp)
            levelpoints.append(pointtemp)
    return levelpoints

for z in range(3): 
    allLvls.append(createNextLevel(allLvls[z]))

def iterlevel(allLvls): 
    prob = 0.9
    for z in range(3): 
        currentlvl = allLvls[z]
        nextLvl = allLvls[z+1] 
        prob = prob - 0.2
        for x in range(r2-2): 
            
            for y in range(r): 
                pos = (x * r) + y

                point_start = currentlvl[pos]
                rs.AddSphere(point_start,0.1)
                point_end_up = nextLvl[pos]
                rs.AddSphere(point_end_up,0.1)
                createPipe(point_start, point_end_up)
                print(point_start, point_end_up)


                if(x != 0 or x != r-1 or y != 0 or y != r-1):
                #if(False):
                    point_end_right = nextLvl[pos + 1]
                    point_end_left = nextLvl[pos - 1]
                    point_end_away_up = nextLvl[pos + r]
                    point_end_away_left = nextLvl[pos  + r]
                    point_end_away_right = nextLvl[pos + r - 1]
                    point_end_back_up = nextLvl[pos - r]
                    point_end_back_left = nextLvl[pos - r - 1]
                    point_end_back_right = nextLvl[pos - r + 1]
                    
                    
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_right)
                 
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_left)
                    
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_away_up)
                   
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_away_right)
                    
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_away_left)
                    
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_back_up)
        
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_back_left)
    
                    rand = random.random()
                    if rand > prob:
                        createPipe(point_start, point_end_back_right)

iterlevel(allLvls)