
void setup() {
  size(400, 400);
    
}

void draw() {
// Innan vi handhar pixlarna
loadPixels();


for (int i = 0; i < pixels.length; i++ ) { 

  // Välj ett slumpmässigt nummer, 0 till 255
  float rand = random(255);

  // Sätt färgen baserat på slumpmässigt antal, i gråskala
  color c = color(rand);

  // Sätt färgen på pixeln 
  pixels[i] = c; 
  
  //noLoop();
}

// Efter vi har arbetat med pixlarna
updatePixels();
}
