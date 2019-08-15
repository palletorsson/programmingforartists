int intA = 0; 
int intB = 0; 
int current = 25;
int xpoint = 0; 

void setup () {
 size(600,600); 
}

void draw() { 
  intA = floor(random(200)); 
  intB = floor(random(200)); 
  // int intC = floor(random(200)); 
  rect(xpoint, 8, 8, 40+intA);  
  // int currentOne = closest(current, intA, intB); 
  // current = closest(current, currentOne, intC); 
  current = closest(current, intA, intB);
  rect(xpoint, 300, 8, 40+current);   
  xpoint = xpoint + 1; 
}

int closest(int c, int a, int b) {
  int ca = abs(c-a); 
  int cb = abs(c-b); 
  if (ca < cb) {
    return a; 
  } else {
    return b; 
  }
}


// int current1 = closest(current, intA, intB); // <--
// intA = (int)random(100); 
// intB = floor(random(100)); 
// int current2 = closest(current, intA, intB); // <--
// current = closest(current, current1, current2); // <--
