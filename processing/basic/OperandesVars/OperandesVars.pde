// tilldela heltal
int myIntA = 2; 
int myIntB = 3;
int myIntC; 

// operera
myIntC = myIntA + myIntB;
println(myIntC); 
myIntC = myIntC - myIntB;
println(myIntC); 
myIntC = myIntC * myIntB; 
println(myIntC); 
myIntC = myIntC / myIntB; 
println(myIntC); 


// shorthand 
myIntC++; // öka med ett
println(myIntC); 

myIntC--; // minska med ett
println(myIntC); 
 
myIntC += myIntB; // samma som myIntC = myIntC + myIntB.
println(myIntC);

myIntC -= myIntB; // samma som myIntC = myIntC - myIntB.
println(myIntC);

// tilldela flyttal
float myFloat = 12.1; 

// Error, Det går inte att addera en in a en float i en int. 
// myIntC = myIntC + myFloat;   

myIntC = myIntC + floor(myFloat); // convent with floor. 

myFloat = myFloat + myIntC;
println(myFloat);

// tilldela Strängar
String myStringA = "Äpple"; 
println(myStringA);

String myStringB = "Päron"; 
println(myStringB);

String myStringC = myStringA + " och " + myStringB; 
println(myStringC);

myStringC = myIntA + " " + myStringA + " och " + myStringB; 
println(myStringC); // myInt konverterades i detta läge till en Sträng.  

// Error, det går däremot inte att lägga till en sträng till en siffra
// myIntA = myIntA + " " + myStringA;


 
