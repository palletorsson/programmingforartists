import rhinoscriptsyntax as rs
import random
from math import sqrt

class Circle:
    size = 100
    def __init__(self):
        self.x = random.randint(0, 100)
        self.y = random.randint(0, 100)
        self.z = 0
        self.radius = random.randint(3, 20)

    def grow(self):
        self.radius = self.radius + 2

    def hitEdges():
        if(self.x + self.radius * 2 > 100):
            if(self.y + self.radius * 2 > 100):
                return True
        return False
        
circles = []


def checkIfCanGrow(obj): 
    for objd in circles:
        if (obj != objd):
            toClose = isObjecToClose(obj, objd)
            if(toClose):
                return False
    return True


def isObjecToClose(obj, objd):
    p2 = [obj.x, obj.y]
    p1 = [objd.x, objd.y]
    pointdistance  = rs.Distance(p2, p1)
    tworad = (obj.radius + objd.radius) 
    distance = pointdistance - tworad
    print(pointdistance, tworad, distance)
    if distance < -1:
        return True
    else:
        return False

    
def addNewCircle(): 
    newobj = Circle()
    willadd = True
    for objd in circles:
        toClose = isObjecToClose(newobj, objd)
        if(toClose):
            #print("toClose")
            willadd = False
            break
            
    if(newobj.hitEdges == True): 
        willadd = False
        
    if(willadd): 
        #print("willAdd")
        circles.append(newobj)
        point = rs.AddPoint(newobj.x, newobj.y, 0)
        rs.AddSphere(point, newobj.radius+4)

for x in range(2000): 
    addNewCircle()


#for obj in circles:
    #print(obj.x, obj.y, obj.radius)
    #point = rs.AddPoint(obj.x, obj.y, 0)
    #rs.AddSphere(point,  obj.radius)
    #rs.AddTorus(point, obj.radius/8, (obj.radius-obj.radius/8)/8, None)
