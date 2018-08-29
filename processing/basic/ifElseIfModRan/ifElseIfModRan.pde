int count = 0;
int zoom = 10; // definierar vi en nya variabel. <-

void setup() {
  size(600, 400);
  background(255); 
  strokeWeight(2);
}

void draw() {
  count++; 
  if (mousePressed == true) { 
    if (count % 64 == 0) { 
      ellipse(mouseX, mouseY, 10, 10);
    } else {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  zoom--; // stega variabeln, zoom nedåt. <-
  if (zoom < -10) { // Om zoom når -10 sätter vi den till 10 igen <-
    zoom = 10;
  }
  strokeWeight(abs(zoom)); // linjens tjocklek bestämmas av zoom <-
  
  if (count % 128 == 0) { 
    stroke(255, 0, 0);
    fill(255, 0, 0);
  } else if (count % 16 == 0) {
    stroke(0, 0, 255);
    fill(0, 0, 255);
  } else if (count % 8 == 0) {
    stroke( random(255), random(255), random(255)); 
    fill(0, 255, 0);
  } else if (count % 4 == 0) {
    fill(random(0, 120), random(0, 255), random(0, 120));
  } 

}

void keyPressed() {
  background(0); // töm skärmen
}
