import rhinoscriptsyntax as rs
import math
import random 
 
points = []
rand = 0.4
for d in rs.frange(0.0, 10.0, 0.1):
    x = d*math.sin(d*d/10)
    y = d*math.cos(d*d/10)
    z = d
    x = x + random.uniform(-rand, rand)
    y = y + random.uniform(-rand, rand)
  
    rs.AddPoint(x,y,z)
    pt = (x,y,z)
    points.append(pt)
     
curve = rs.AddCurve(points)
