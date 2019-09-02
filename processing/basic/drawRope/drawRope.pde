int index = 0;

// once
void setup() {
  size(800, 800);
  background(255);
  strokeWeight(4);  
}

// loop
void draw() {
  index++; 
  if (mousePressed == true) {
    if (index % 8 == 0) {
      ellipse(pmouseX, pmouseY, 10, 10);
    } else {
       line(pmouseX, pmouseY, mouseX, mouseY);  
    }
  } 
  
} // end of draw 
