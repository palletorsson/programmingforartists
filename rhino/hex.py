import rhinoscriptsyntax as rs

def Hex(c,r):
    cc = rs.AddPoint(c)
    first = rs.MoveObject(cc, [r,10,0])
    Vlist = []
    Vlist.append(first)
    for i in range(1,12):
        P = rs.RotateObject(first, c, i*60, None, True)
        Vlist.append(P)
    L1 = rs.AddLine(Vlist[0], Vlist[-1])
    L2 = rs.AddPolyline(Vlist)
    rs.JoinCurves([L1, L2], True, None)
    return Vlist


def HexRecur(c,r,v): 
    if v <= 1:
        Hex(c,r)
    else: 
        ratio = 2
        theList = Hex(c,r)
        all3Center = []
        for i in range(0,3):
            line = rs.AddLine(c, theList[i*2])
            cNew = rs.CurveMidPoint(line,2)
            rs.AddCircle(cNew, r/ratio)
            all3Center.append(cNew)
            Hex(cNew, r/ratio)
        return HexRecur(all3Center[0], r/ratio, v-1), 
        HexRecur(all3Center[1], r/ratio, v-2),
        HexRecur(all3Center[2], r/ratio, v-3)


level = 24
center = [0,0,0] 
radius = 10
HexRecur(center, radius, level)