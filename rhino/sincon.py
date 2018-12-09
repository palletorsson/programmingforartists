import rhinoscriptsyntax as rs
import math

points = []
for i in range(500):
    x = math.cos(i*0.1) * i*0.1
    y = math.sin(i*0.1) * i*0.1
    if(i < 200):
        z = i*0.05
    else:
        z = 20-i*0.05
    p = rs.AddPoint(x,y,z)
    points.append(p)
    
    
for point in points:
    rs.AddSphere(point, 4)