PImage img;
int cellsize = 40; 
int halfsize = cellsize/2; 

void setup() {
  size(800, 80);
  background(255);
}

void draw() {
  background(255);
  loadPixels();
  for ( int i = halfsize; i < width; i=i+cellsize*2) {
    ellipse(i+halfsize, cellsize, cellsize, cellsize);
  }
}
