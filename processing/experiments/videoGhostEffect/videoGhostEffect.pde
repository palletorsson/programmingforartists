import processing.video.*;
// Två globala variabler
float x;
float y;

// Variabel för Capture-objektet.
Capture video;

void setup() {  
  size(640, 480);  
  background(255);  
  // Starta x och y i mitten 
  x = width/2;  
  y = height/2;
  // Starta webbkameran
  video = new Capture(this, width, height);  
  video.start();
}

void captureEvent(Capture video) {  
  // Läs bild från kameran
  video.read();
}

void draw() {
  video.loadPixels();
  // skapa 1000 linjer
  for (int i = 0; i < 500; i++) {
    float newx = constrain(x + random(-50, 50), 0, width);   
    float newy = constrain(y + random(-50, 50), 0, height-1);
   
    // Hitta mitten av linjen
    int midx = int((newx + x) / 2.1);
    int midy = int((newy + y) / 2.1);
    
    // Välj färg från videon, vänd värdet på x. dra ner värdet för att skapa effect
    color c = video.pixels[(width-1-midx) + midy*video.width] * -11;
   
    // Rita en linje från (x, y) till (newx, newy)
    
    stroke(c);  
    strokeWeight(4);  
    line(x, y, newx, newy);  
    
    // Spara (newx, newy) i (x, y) 
    x = newx;  
    y = newy;
  }
}
