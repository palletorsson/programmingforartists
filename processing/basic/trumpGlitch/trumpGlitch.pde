PImage img;
int cellsizeX = 4; 
int cellsizeY = 4; 
int cols, rows; 


// byt ut värdet på cell
void setup() {
  // storleken på fönstet får inte var större än bildens pixlar
  size(800, 600);
  img = loadImage("img.jpg");
  background(255);
  smooth();
  cols = width/cellsizeX;             // Räkna ut # of columner
  rows = height/cellsizeY;            // Räkna ut # of rader
}

void draw() {
  loadPixels();
  for ( int i = 10; i < cols-10; i++) {
    // Begin loop for rows
    for ( int j = 10; j < rows-10; j++) {      
      int x = i*cellsizeX + cellsizeX; // x position
      int y = j*cellsizeY + cellsizeY; // y position
      int loc = x + y*width;           // pixel plats
      float r = red(img.pixels[loc]);
      float b = green(img.pixels[loc]);
      float g = blue(img.pixels[loc]);
      noStroke();
      fill(r, g, b, mouseX/cellsizeY);  
      rect(x, y, 4, 4);
    }
  }
  if (cellsizeX < 4) {
  cellsizeX = 2; 
  cellsizeY  = 2; 
  }
  cellsizeX++; 
  cellsizeY++; 
  updatePixels();
}
