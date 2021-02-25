import rhinoscriptsyntax as rs
centerPoint = rs.GetPoint("Specify the center of polygon")
numberEdges = rs.GetInteger("Enter the number of edges", 6, 3)
radius = rs.GetReal("Specify the radius of polygon", 10)
iterat = rs.GetInteger("Enter the number of iterations", 60

)
scale1 = rs.GetReal("Specify the first scale",.5)
scale2 = rs.GetReal("Specify the fractal scale",.4)
rs.EnableRedraw (False)
tempCircle = rs.AddCircle(centerPoint, radius)
pointList = rs.DivideCurve(tempCircle, numberEdges)
pointList.append(pointList[0])
rs.DeleteObject(tempCircle)
polygon = rs.AddPolyline(pointList)
nextRow = []
scale = scale1


s = 8

move = s

myRadius = 3
cube= rs.AddSphere([-s,-s,-s], s)

for i in range(0, iterat):
	for x in pointList:
		vector = rs.VectorCreate(x, centerPoint)
		object = rs.CopyObject(polygon, vector)
		object1 = rs.CopyObject(cube, vector)
		temp = rs.ScaleObject(object, x, [scale,scale,scale])
		temp = rs.ScaleObject(object1, x, [scale,scale,scale])
		move = move *0.8
		
		rs.MoveObject(object1, [0,move,move])
		
	scale = scale * scale2
rs.EnableRedraw (True)


def box2pt(p1, p2):

    pt0 = p1
    pt1 = rs.coerce3dpoint([p2[0], p1[1], p1[2]])
    pt2 = rs.coerce3dpoint([p2[0], p2[1], p1[2]])
    pt3 = rs.coerce3dpoint([p1[0], p2[1], p1[2]])
    pt4 = rs.coerce3dpoint([p1[0], p1[1], p2[2]])
    pt5 = rs.coerce3dpoint([p2[0], p1[1], p2[2]])
    pt6 = p2
    pt7 = rs.coerce3dpoint([p1[0], p2[1], p2[2]])

    form = rs.AddBox([pt0, pt1, pt2, pt3, pt4, pt5, pt6, pt7])
    return form


