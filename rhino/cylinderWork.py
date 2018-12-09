import rhinoscriptsyntax as rs
import random
spacing = 20

def createCylinderCake():
    for i in range(10):
        point1 = rs.CreatePoint(0,0,-i)
        rs.AddCylinder(point1,10, i)

def createCylinderVisual(_space):
    for i in range(10):
        point1 = rs.CreatePoint(i*spacing,0,0)
        rs.AddCylinder(point1,random.randint(1,spacing), random.randint(1,spacing/2))

for x in range(10):
    createCylinderVisual(spacing)
