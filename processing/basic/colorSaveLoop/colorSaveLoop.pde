// definiera tre färger <-


int iteration = 0; 

 
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
      pixels[i] = color(255, iteration, iteration);
    } else if (i % 23 == 0) {
      pixels[i] = color(iteration,255,iteration);
    } else {
      pixels[i] = color(iteration, iteration, 255);
    }
    
  }
  // efter förändringen uppdatera pixlarna <-
  updatePixels(); 
  
  // Så har kan man spara en bild <-
  save("blackandyellow"+iteration+".jpg");
  if (iteration > 255) {
      noLoop();
  }
  iteration=iteration+10; 
}
