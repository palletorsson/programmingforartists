import rhinoscriptsyntax as rs
import math
import random 

class MyPolygon:
 
    def __init__(self,radius,sides):
        self.radius = radius
        self.sides = sides
        theta = (2*math.pi)/self.sides
        print theta
        pt01 = rs.AddPoint(self.radius,0,0);
        pts = []
        pts.append(pt01)
        self.origin = [0,0,0]
        degrees = theta*(180/math.pi)
      
        for i in range(1,self.sides):
            tempPt = pts[-1]
             #[0] = tempPt[0] + random.random
            newPt = rs.RotateObject(tempPt,self.origin,degrees,None,True)
            print dir(newPt)
            pts.append(newPt)
       
        self.polygon = rs.AddPolyline(pts);
        
 
    def fillPolygon(self):
        return rs.AddPlanarSrf(self.polygon)
 
    def extrudePolygon(self,height):
        startPt = self.origin;
        newZ = self.origin[2]+height
        endPt = [self.origin[0],self.origin[1],newZ]
        return rs.ExtrudeCurveStraight(self.polygon, startPt, endPt)
 
 
 
#polygon1 = MyPolygon(5,5)
#polygon1.fillPolygon()
#polygon1.extrudePolygon(5)
#polygon1.createPolygon()
def MakeCirclePoints( circle, count ):
  for i in xrange(count):
    #circles parameterized between 0 and 2Pi
    t = float(i) * 2 * math.pi / float(count)
    print t
    pt = circle.PointAt(t)
    scriptcontext.doc.Objects.AddPoint(pt)

pts = []

for x in range(100): 
    pts.append(rs.AddPoint(x,0,random.randint(1, 20)))
rs.AddPolyline(pts);
circle = GetCircleFromUser()
MakeCirclePoints( circle, 10 )