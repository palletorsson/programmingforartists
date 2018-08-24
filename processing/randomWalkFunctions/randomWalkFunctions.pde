
int xPos = 300;
int yPos = 200;
int xPosNext = xPos;
int yPosNext = yPos;

void setup() {
  size(600, 400); 
  background(155);
}

void draw() {
 randomMove(); 
 checkEgdes();
}

void randomMove() {
  xPos = xPos + (int)random(-10, 10);
  yPos = yPos + (int)random(-10, 10);
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
