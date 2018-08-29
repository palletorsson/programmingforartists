PImage img;
int pointillize = 6;
int cellsize = 5; 
int cols, rows; 

void setup() {
  size(1000, 667);
  img = loadImage("img.jpg");
  background(255);
  smooth();
  cols = width/cellsize;             // Räkna ut # of columner
  rows = height/cellsize;            // Räkna ut # of rader
}

void draw() {
  loadPixels();
  for ( int i = 0; i < cols; i++) {
    // Begin loop for rows
    for ( int j = 0; j < rows; j++) {      
      int x = i*cellsize + cellsize/2; // x position
      int y = j*cellsize + cellsize/2; // y position
      int loc = x + y*width;           // pixel plats
      float r = red(img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue(img.pixels[loc]);
      noStroke();
      fill(r, g, b, 100);  
      ellipse(x, y, mouseX/10-10, mouseY/10-10);
    }
  }
}
