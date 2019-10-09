// 6. importera och använd ett bibliotek
import processing.sound.*;
TriOsc triangle;





// 1. skapa variable "hello world" och kör programmet
String hello = "Hello World";

// 2. skapa och initiera variabler - "hello", 4, 2.3 - dynamiskt typat
String hell2 = "Hello";
int myNumber = 4;
float myFloar = 2.3;

// 9. skapa lista och läs 
int[] myList = {1, 23, 75, 333}; 
void setup() {
  
  // 6. importera och använd ett bibliotek
  triangle = new TriOsc(this);
  triangle.play();
  // 10. skapa lista och läs den med for-loop
  for (int i = 0; i < myList.length; i++) {
    println(myList[i]); 
  
  }
  // 11. läs webbsida och kolla vilka ord som är vanligast
  String[] lines = loadStrings("http://processing.org/about/index.html");
  println("there are " + lines.length + " lines");
  for (int i = 0 ; i < lines.length; i++) {
    println(lines[i]);
  }
  // svår löst med processing finns inget b
}
void draw() {
  // 5. använd funktionen och skriv ut dess värd
  myPrintFunction();
  myRetFunction(10, "hello world"); 
  noLoop(); 
}

// 3. definiera en funktion, indentering
void myPrintFunction() {
   print("Hello World"); 
}

// 4. funktion som tar argument
//    funktion som returnerar ett värde
Boolean myRetFunction(int a, String b) {
  for (int k = 1; k < a; k++) {
   println(b); 
  }
  return true; 
}

// 8. funktion med villkorligt flöde - if, elif, else
String myRetFunction(int a) {
  int r = (int)random(10);
  String ret = "";
  if (a == r) {
     ret = "is the same";
  } else if (a < r) {
    ret = "you loose";
  } else {
    ret = "you win";
  }
  return ret; 
}

// 7. funktion med standardvärdet för ett argument och använd random
// ...
