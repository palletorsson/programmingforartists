
PImage img;

// Storlek på varje cell i rutnätet, förhållandet mellan fönsterstorlek och videostorlek
int videoScale = 10; 

int cols, rows;
int i = 0;
int j = 0;
int imgHeight = 556;
int imgWidth = 1200; 

void setup() {
  size(1600, 1000);  
  background(0);  
  img = loadImage("PaulaScher.jpg");
  cols = 240;  
  rows = 320;

}

void draw() {  
  i++; 
  if (i > 5) {
    i = 0; 
    j++; 
    if (j > 5) {
      j = 0;
    }
  }
  int r1 = floor(random(imgHeight-240)); 
  int r2 = floor(random(imgWidth-320)); 
  PImage temp = img.get(r2, r1, 320, 240); 
  image(temp, i*320, j*240);
    tint(255, mouseX);
}
