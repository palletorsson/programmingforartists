PImage img;
int cellsizeX = 2; 
int cellsizeY = 2; 
int cols, rows; 

// byt ut värdet på cell
void setup() {
  // storleken på fönstet får inte var större än bildens pixlar
  size(800, 800);
  img = loadImage("img.jpg");
  background(255);
  smooth();
  cols = width/cellsizeX;             // Räkna ut # of columner
  rows = height/cellsizeY;            // Räkna ut # of rader
}

void draw() {
  loadPixels();
  for ( int i = 0; i < cols; i++) {
    // Begin loop for rows
    for ( int j = 0; j < rows; j++) {      
      int x = i*cellsizeX + cellsizeX; // x position
      int y = j*cellsizeY + cellsizeY; // y position
      int loc = x + y*width;           // pixel plats
      float r = red(img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue(img.pixels[loc]);
      noStroke();
      fill(r, g, b, 100);  
      ellipse(x, y, mouseX/10-10, mouseY/10-10);
    }
  }
  if (cellsizeX < 16) {
  cellsizeX = 2; 
  cellsizeY  = 2; 
  }
  cellsizeX++; 
  cellsizeY++; 
}
