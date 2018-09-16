
float xPos = 300;
float yPos = 200;
float xPosNext = xPos;
float yPosNext = yPos;
float time = 0; 
void setup() {
  size(600, 400); 
  background(155);
}

void draw() {
  randomMove(); 
  checkEgdes();
}

void randomMove() {
  if (mouseX < 300) { 
    stroke(0,0,255);
    xPos = xPos + (int)random(-10, 10);
    yPos = yPos + (int)random(-10, 10);
  } else {
    stroke(255,0,0);
    xPos = xPos + (noise(time)-0.5)*5;
    yPos = yPos + (noise(time+30)-0.5)*5;
  }
  time = time + 0.05; 
  line(xPos, yPos, xPosNext, yPosNext);
  xPosNext = xPos;
  yPosNext = yPos;
} 

void checkEgdes() {
  if (xPos < 0) {
    xPos++;
  }
  if (xPos > width) {
    xPos--;
  }
  if (yPos < 0) {
    yPos++;
  }

  if (yPos > height) {
    yPos--;
  }
}
