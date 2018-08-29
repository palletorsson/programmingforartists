PImage img;
int cellsize = 40; 
int halfsize = cellsize/2; 
int r = 20;

void setup() {
  size(800, 800);
  background(255);
}

void draw() {
  // background(0);
  loadPixels();
  
  for ( int i = halfsize; i < width; i=i+cellsize*2) {
    for ( int j = halfsize; j < height-cellsize; j=j+cellsize*2) {
      // float r = floor(random(1, cellsize));
      // stroke(random(0,255),random(0,255),random(0,255),random(0,255)); 
      ellipse(i+halfsize, j+halfsize, halfsize+r, halfsize+r);
    }
  }
}
