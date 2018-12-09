import rhinoscriptsyntax as rs
import random
spacing = 20

def createConeVisual(_space):
    for i in range(10):
        point1 = rs.CreatePoint(i*spacing,0,0)
        rs.AddCone((i*_space,0, spacing/2*random.random()), -random.randint(1,spacing), random.randint(1,spacing/2))

for x in range(10):
    createConeVisual(spacing)

