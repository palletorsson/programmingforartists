import processing.video.*; 
Capture cam; 
// Två globala variabler
float x;
float y;
int videoScale = 2;
// Variabel för Capture-objektet.

void setup() {  
  size(640, 480);  
  background(255);  
  x = width;  
  y = height;
  cam = new Capture(this);
  cam.start();
}

void draw() {
  cam.loadPixels();
  if (cam.available()) { 
    // Reads the new frame
    cam.read(); 

    // skapa 500 linjer
    for (int i = 0; i < 500; i++) {
      float newx = constrain(x + random(-50, 50), 0, width);   
      float newy = constrain(y + random(-50, 50), 0, height-1);

      // Hitta mitten av linjen
      int midx = int((newx + x) / 2);
      int midy = int((newy + y) / 2);
      // Pick the color from the video, reversing x
      color c = cam.pixels[(width-midx) + midy*cam.width];

      // Rita en linje från (x, y) till (newx, newy)

      stroke(c);  
      strokeWeight(4);  
      line(x, y, newx, newy);  

      // Spara (newx, newy) i (x, y) 
      x = newx;  
      y = newy;
    }
  }
}
