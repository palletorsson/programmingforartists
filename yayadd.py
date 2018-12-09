intlist = [59.0, 60.0, 120.0, 180.0, 240.0, 241.0, 300.0, 420.0, 8100.0, 10320.0, 10381.0,11340.0, 12120.0, 27780.0]

index = 0; 
for cint in intlist: 
    print(intlist[index+1], intlist[index])
    print(intlist[index] / intlist[index+1])
    index= index + 1