int numKryp = 4;


Kryp[] allKryp = new Kryp[numKryp];

void setup() {
  size(640, 360);
  for (int i = 0; i < numKryp; i++) {
    allKryp[i] = new Kryp(random(width), random(height), random(30, 70), i);
  }
  noStroke();
  fill(255, 204);
}

void draw() {
  background(0);
  for (Kryp kryp : allKryp) {
    kryp.move();
    kryp.checkEdges(); 
    kryp.display();  
  }
}

class Kryp {
  
  float x, y;
  float size;
  float vx = 0;
  float vy = 0;
  int id;

  Kryp(float xin, float yin, float din, int id) {
    x = xin;
    y = yin;
    size = din;
  } 
  
  void move() {
    x += random(3) -2;
    y += random(3) -2;
  }
  
  void checkEdges() {
    if ( x > width-size || x < size) {
    x *= -1;
  }
  if (y > height-size|| y < size) {
    y *= -1;
  }
  }
  
  void display() {
    ellipse(x, y, size, size);
  }
}
