import rhinoscriptsyntax as rs
import random

pts = []
levelPts = []
num = 8
levels = 1

def makeFirstLevel(_num): 
    for x in range(_num):
        for y in range(_num):
            if random.random() > 0.1:
                newPt = rs.CreatePoint((x,y,0))
                rs.AddSphere(newPt,1.0)
                pts.append(newPt)
    return pts


def makeLevels(_points, _z, _num, _probability):
    levels = _z
    for point in _points:
        for x in range(_num):
           for y in range(_num):
               currentPt = rs.CreatePoint((x,y,0))
               if point == currentPt: 
                   if random.random() > _probability:
                       newPt = rs.CreatePoint((x,y,_z))
                       rs.AddSphere(newPt,1.0)
                   else: 
                       pts.remove(point)
    levels = levels + 1
    _probability = _probability + 0.2
    if levels < 5: 
         makeLevels(lv1, levels, 10, _probability)
    else: 
        return False



lv1 = makeFirstLevel(num)
makeLevels(lv1, 1, 10, 0.1)
