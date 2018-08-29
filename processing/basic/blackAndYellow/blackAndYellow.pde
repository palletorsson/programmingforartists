// definiera tre färger <-
color cRed = color(255, 0, 255);
color cBlack = color(0);
color cYellow = color(255,255,0);

void setup() {
  size(600, 400);
}

void draw() {
  // Förbered pixlarna att bli förändrade <-
  loadPixels();  

  // Loopa igenom varje pixel och bestäm dess värd <-
  for (int i = 0; i < pixels.length; i++) {  
    
    // i en if-sats bestämmer vi värdet genom modulus <-
    if (i % 13 == 0) {
      pixels[i] = cRed;
    } else if (i % 23 == 0) {
      pixels[i] = cBlack;
    } else {
      pixels[i] = cYellow;
    }
    
  }
  // efter förändringen uppdatera pixlarna <-
  updatePixels(); 

  // Så har kan man spara en bild <-
  save("blackandyellow.jpg");
  noLoop();
}
