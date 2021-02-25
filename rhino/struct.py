import rhinoscriptsyntax as rs
import random

def box2pt(p1, p2, r1, r2):

    pt0 = p1
    pt1 = rs.coerce3dpoint([p2[0], p1[1], p1[2]])
    pt2 = rs.coerce3dpoint([p2[0], p2[1], p1[2]])
    pt3 = rs.coerce3dpoint([p1[0], p2[1], p1[2]])
    pt4 = rs.coerce3dpoint([p1[0], p1[1], p2[2]])
    pt5 = rs.coerce3dpoint([p2[0], p1[1], p2[2]])
    pt6 = p2
    pt7 = rs.coerce3dpoint([p1[0], p2[1], p2[2]])

    theBox = rs.AddBox([pt0, pt1, pt2, pt3, pt4, pt5, pt6, pt7])
    
            centroid = rs.SurfaceAreaCentroid(theBox)[0]
            rs.RotateObject(theBox, centroid, r1, [0,1,0])
    rs.RotateObject(theBox, centroid, r2, [1,0,0])

def box2px(p1, p2, m1, r1, v1):

    pt0 = p1
    pt1 = rs.coerce3dpoint([p2[0], p1[1], p1[2]])
    pt2 = rs.coerce3dpoint([p2[0], p2[1], p1[2]])
    pt3 = rs.coerce3dpoint([p1[0], p2[1], p1[2]])
    pt4 = rs.coerce3dpoint([p1[0], p1[1], p2[2]])
    pt5 = rs.coerce3dpoint([p2[0], p1[1], p2[2]])
    pt6 = p2
    pt7 = rs.coerce3dpoint([p1[0], p2[1], p2[2]])

    theBox = rs.AddBox([pt0, pt1, pt2, pt3, pt4, pt5, pt6, pt7])
    rs.MoveObject(theBox, m1)    
    centroid = rs.SurfaceAreaCentroid(theBox)[0]
    rs.RotateObject(theBox, centroid, r1, v1)


def createstruct(p1, p2, s1):
    box2pt(p1, p2, s1, s1)
    box2pt(p1, p2, -s1, s1)
    box2pt(p1, p2, -s1, -s1)
    box2pt(p1, p2, s1, -s1)    

def createstruct2(p1, p2, s1):
    box2px(p1, p2, [0,5,0], s1, [1,0,0])
    box2px(p1, p2, [0,5,0], -s1, [1,0,0])
    box2px(p1, p2, [0,-5,0], s1, [1,0,0])
    box2px(p1, p2, [0,-5,0], -s1, [1,0,0])
    box2px(p1, p2, [5,0,0], s1, [0,1,0])
    box2px(p1, p2, [5,0,0], -s1, [0,1,0])    
    box2px(p1, p2, [-5,0,0], s1, [0,1,0])
    box2px(p1, p2, [-5,0,0], -s1, [0,1,0])    


x = 5
z = 5
high = 12
hightpoint = 360
dist = 180 
size = 30
index = 0
for i in range(x):
    for j in range(z):
        p1 = [i*dist, j*dist, hightpoint]
        p2 = [(i*dist)+size, (j*dist)+size, size*high +hightpoint]
        p3 = [i*dist, j*dist, hightpoint+180]
        rand = random.random()
        print(rand)
        if (rand > 0.5):
            rs.AddSphere(p3, 130)
        else: 
            createstruct(p1, p2, 45)
        index = index + 1
            
