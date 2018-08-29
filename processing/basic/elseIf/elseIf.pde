int count = 0;

void setup() {
  size(600, 400);
  background(255); 
  strokeWeight(2);
}

void draw() {
  count++; // "shorthand" för count = count + 1; 

  if (mousePressed == true) { 
    if (count % 64 == 0) { 
      ellipse(mouseX, mouseY, 10, 10);
    } else {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}

void keyPressed() {
  background(0); // töm skärmen
}
