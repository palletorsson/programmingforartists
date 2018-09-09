PImage img;
int cellscaleX = 100; 
int cellscaleY = 100; 
int cols, rows; 
float t = 0; 
// byt ut värdet på cell
void setup() {
  // storleken på fönstet får inte var större än bildens pixlar
  size(1000, 500);
  img = loadImage("img.jpg");
  background(255);
  smooth();
  cols = width/cellscaleX;             // Räkna ut # of columner
  rows = height/cellscaleY;            // Räkna ut # of rader
  //noStroke();
}
// en kurs, it not selfavare
void draw() {
  if (keyPressed == true)
  //background(255);
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
      float n2 = noise(t+100); 
      float n3 = noise(t+200);
      float n4 = noise(t+300);
      //fill(random(255), random(255), random(255),  255);
      fill(n2*mouseX/2, n2*200, n3*mouseY/2, 4);
      println(n3*400);
      float n1 = noise(t);
      //float n2 = noise(t+100); 
      float r1 = random(cellscaleY*2);
      float r2 = random(cellscaleY*2); 
      // fill(r, g, b, 255);
      if (mouseX % 4 == 0) {
        ellipse(x, y,  r1, r2);
      } else {
        ellipse(x, y, n2*400, n3*400);
      }
      //ellipse(x+(n1*cellscaleY*2)/2, y+(n1*cellscaleY*2)/2, n1*cellscaleY*2, n1*cellscaleY*2);
      
       t = t + 0.00002; 
    }
  }
  //t = t + 0.1; 
}
