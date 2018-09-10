PImage big;
PImage small; 
PImage small2; 
PImage small3; 

int h = 0; 
int bw = 100; 
int bm = 0; 
int sw = 400; 
int sm = 300; 
int sw2 = 500; 
int sm2 = 300; 
int sw3 = 200; 
int sm3 = 100; 
void setup() {
  size(800, 600); 
  background(89, 145, 255); 
  big = loadImage("big.jpg"); 
  small = loadImage("small.jpg"); 
  small2 = loadImage("small.jpg");
  small3 = loadImage("small.jpg"); 
  bw = width;
  sw = bw;
}

void draw() {
  image(big, width-bm, bw); 
  if (bm > width+200) {
    bm = 0; 
    bw = floor(random(height-100));
  } 
  bm++; 
  image(small, width-sm, sw); 
  if (sm > width+100) {
    sm = 0; 
    sw = floor(random(height-100));
  } 
  sm++; 
  image(small2, width-sm2, sw2); 
  if (sm2 > width+300) {
    sm2 = int(random(-100, 0)); 
    sw2 = floor(random(height-100));
  } 
  sm2++;
    image(small3, width-sm3, sw3); 
  if (sm3 > width+400) {
    sm3 = int(random(-200, 0)); 
    sw3 = floor(random(height-100));
  } 
  sm3++;
}
