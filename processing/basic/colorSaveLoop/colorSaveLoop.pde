

int iteration = 0; 

void setup() {
  size(600, 400);
}


void draw() {
   if (mousePressed == true) { // sant om muspekaren pressar ner 
      ellipse(mouseX , mouseY, abs(mouseX-pmouseX), abs(mouseX-pmouseX));  // rika en punkt på musens plats
   }
}

void keyPressed() {
  
  // Så har kan man spara en bild <-
  save("img"+iteration+".jpg");
  
  //if (iteration > 255) {
     // noLoop();
  //}
  iteration=iteration+4; 
}
