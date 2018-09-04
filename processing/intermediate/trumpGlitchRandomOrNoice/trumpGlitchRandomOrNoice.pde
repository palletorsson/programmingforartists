PImage img;
int cellscaleX = 10; 
int cellscaleY = 10; 
int cols, rows; 
float t = 0; 
// byt ut värdet på cell
void setup() {
  // storleken på fönstet får inte var större än bildens pixlar
  size(1000, 667);
  img = loadImage("img.jpg");
  background(255);
  smooth();
  cols = width/cellscaleX;             // Räkna ut # of columner
  rows = height/cellscaleY;            // Räkna ut # of rader
  noStroke();
}

void draw() {
  background(0);
  loadPixels();
  // loopa columner
  for ( int i = 0; i < cols; i++) {
    // loopa rader
    for ( int j = 0; j < rows; j++) {   
      // hitta scala för x och y postionen för 
      int x = i*cellscaleX + cellscaleX/2; 
      int y = j*cellscaleY + cellscaleY/2; 
      // räkna ut pixel plats
      int loc = x + y*width;  
      // hämta pixels r, g och b värden
      float r = red(img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue(img.pixels[loc]);
      // ändra fill färgen 
      fill(r, g, b, 100);
      float n1 = noise(t);
      //float n2 = noise(t+100); 
      float r1 = random(cellscaleY*2); 
      fill(r, g, b, 255);
      //ellipse(x, y, mouseX/10, mouseY/10);
      //ellipse(x+(n1*cellscaleY*2)/2, y+(n1*cellscaleY*2)/2, n1*cellscaleY*2, n1*cellscaleY*2);
      ellipse(x, y, r1, r1);
    }
  }
  t = t + 0.1; 
}
