int intA = 0; 
int intB = 0; 
int current = 25;

void setup () {
 size(600,400); 
 frameRate(2);
}
void draw() { 
  background(0);
  intA = (int)random(100); 
  intB = floor(random(100)); 
  rect(270-current/2, 220, current*2, 10);
  current = closest(current, intA, intB); // <--
  text(current, 295, 200);
  rect(270-current/2, 240, current*2, 10);
  rect(270-intB/2, 140, intB*2, 10);
  rect(270-intA/2, 160, intA*2, 10);
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
 
