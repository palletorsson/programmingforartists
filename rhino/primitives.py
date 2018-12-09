import rhinoscriptsyntax as rs

# rs.AddPoint( - syntax tip
myPoint = rs.AddPoint( (1,2,3) )

# rs.AddSphere(center, radius)
myRadius = 3
mySpere = rs.AddSphere(myPoint, myRadius)

# skapa en kone
myCone = rs.AddCone((1,2,3), 20, 10)

# skapa en cylinder 
myCone = rs.AddCylinder((0,-10,0), 2, 10)

# skapa en linje
myPoint_2 = rs.AddPoint( (0,0,0) )
myPoint_3 = rs.AddPoint( (10,0,0) )
rs.AddLine(myPoint_2, myPoint_3)


