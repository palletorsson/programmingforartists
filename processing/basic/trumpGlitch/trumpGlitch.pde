PImage img;

int cellsizeX = 10; 
int cellsizeY = 10; 
int cols, rows; 


// byt ut värdet på cell
void setup() {
  // storleken på fönstet får inte var större än bildens pixlar
  size(1000, 667);
  img = loadImage("img.jpg");
 // smooth();
}



void draw() {
  loadPixels(); 
  // Since we are going to access the image's pixels too  
  img.loadPixels(); 
  for (int y = 0; y < height; y=y+4) {
    for (int x = 0; x < width; x=x+4) {
      int loc = x + y*width;   
      // The functions red(), green(), and blue() pull out the 3 color components from a pixel.
      float r = red(img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue(img.pixels[loc]);
      // println(r, g, b); 
      // Image Processing would go here
      // If we were to change the RGB values, we would do it here, 
      // before setting the pixel in the display window.
      
      // Set the display pixel to the image pixel
      pixels[loc] =  color(g, r, b);  
      color c = color(r, g, b); 
      fill(c); 
      rect(y, x, 8, 8);  
    }
  }
  updatePixels();
  noLoop(); 

}
