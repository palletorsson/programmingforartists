import rhinoscriptsyntax as rs
objs = rs.AllObjects(select=True)
for obj in objs: 
    print "Object identifier: ", obj
    centroid = rs.MeshAreaCentroid(obj)
    rs.RotateObject(obj, centroid, 90, [0,0,1])