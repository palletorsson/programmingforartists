int x, y;
int size = 0;
int spread = 3; 

void setup() {
  size(1000, 700);
  background(255);
  stroke(0); 
  noFill(); 
  stroke(255, 0, 0);
}

void draw() {
  background(225);
  size++; 
  mirrorSphere(width/2, height/2, size);
  if(size > 1000) {
    noLoop();
  }
}

void mirrorSphere(float x, float y, float s) {
  if (s > 10) {
    ellipse(x, y, s, s);
    mirrorSphere(x + (s/spread), y, s*0.5);
    mirrorSphere(x - (s/spread), y, s*0.5);
   // mirrorSphere(x, y + (s/spread), s*0.5);
   // mirrorSphere(x, y - (s/spread), s*0.5);
  } 
}