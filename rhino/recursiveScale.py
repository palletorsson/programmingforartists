import rhinoscriptsyntax as rs

def RecursiveScale(objID, scalePt, scaleFact, scaleVect, num): 
    if num == 0: 
        return 0 
    else: 
        
        # move 
        sc = (1.0 / scaleFact) 
        # scale 
        scaleVect = [x - sc for x in scaleVect] 
      
        rs.ScaleObject(objID, scalePt, scaleVect, True) 
        return RecursiveScale(objID, scalePt, scaleFact, scaleVect, num-1) 


objID = rs.GetObject() 
scalePt = [10, 10, 10] 
scaleFact = 0.2
scaleVect = [1, 1, 1] 
num = 4

RecursiveScale(objID, scalePt, scaleFact, scaleVect, num)
