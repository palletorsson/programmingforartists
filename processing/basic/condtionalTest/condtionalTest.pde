
void setup() {
    size(1000, 1000);   
}

void draw() {
   if (mousePressed == true) { // om muspekaren pressar ner 
      point(mouseX , mouseY);  // rika en punkt på musens plats
   }
}

// Test:
// byt ut point(mouseX, mouseY);
// mot ellipse(mouseX, mouseY, 10, 10);
// Vad tror du kommer hända? 
// vad händer om man dubblerar och kastar om x och y? 
