
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk
// Modifed by Palle Torsson for Programming for Artist 2018

int cols, rows;
int scl = 10;
int w = 1600;
int h = 1000;

float flyingy = 0;
float flyingx = 0;

float[][] terrain;

void setup() {
  size(800, 800,P3D);
  cols = w / scl;
  rows = h/ scl;
  terrain = new float[cols][rows]; 
}

void draw() {
  //if(mouseY > 350 && mouseY < 450) 
   flyingy -= (mouseY*0.002)-1;
  
  //if(mouseX > 350 && mouseX < 450) 
  flyingx -= (mouseX*0.002)-1;
  
  float yoff = flyingy;
  for (int y = 0; y < rows; y++) {
    float xoff =  flyingx;
    for (int x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, 0, 255);
      //terrain[x][y] = random(255);
      xoff += 0.02;
    }
    yoff += 0.02;
  }
  background(125);
  stroke(124);
  translate(width/2, height/2+50);
  rotateX(PI/3.5);
  translate(-w/2, -h/2);
  for (int y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (int x = 0; x < cols; x++) {
      fill(144,terrain[x][y]-1,144);
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      //rect(x*scl, y*scl, scl, scl);
    }
    endShape();
  }
}
