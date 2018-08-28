int intA = 0; 
int intB = 0; 
int current = 25;
int rx = 0; 
int ry = 0; 
int nx = 0; 
int ny = 0; 
int v = 0; 
int ocurrent = 50; 
int intOldA = 50;
float yPosOld, yPos; 
void setup () {
 size(600,600); 
 frameRate(4);
 textSize(20);
 strokeWeight(2);
 background(190); 
}
void draw() { 
  v = v + 4; 
  if (v > width ) {
    v = 0; 
    background(190); 
  }
  //background(0);
  stroke(255-v/3, 0, v);
  // slumpgraf
  intOldA = intA;
  intA = (int)random(100); 
  line(v+2, intA, v-2, intOldA); 
  // närhetsgraf
  intB = floor(random(100));
  ocurrent = current; 
  current = closest(current, intA, intB); 
  line(v+2, current+200, v-2, ocurrent+200); 
  fill(255);
  stroke(0);
  // noicegraf
  yPosOld =  yPos; 
    yPos = noise(v*0.1);
  yPos = map(yPos, 0, 1, 0, 100);
  line(v+2, yPos+200, v-2, yPosOld+200);
  // punter till grafer
  ellipse(v, intA, 2, 2); 
  ellipse(v, ocurrent+200, 2,2); 
  noStroke(); 
  // horisontala cirklar
  fill(random(255), v/3, 255-v/3, 40);
  ellipse(100+yPos*4, 330, 20, 20);
  ellipse(100+current*4, 360, 20, 20);
  ellipse(100+intA*4, 390, 20, 20);
 
  // vit fält längst ner
  fill(255);
  stroke(0);
  rect(-10, 420, width+10, 300);
  ellipse(125, 500, intB, intA);
  ellipse(312, 500, current, ocurrent);
  ellipse(475, 500, yPos, yPosOld);
  
  fill(190);
  // rullande nummer
  noStroke();
  rect(-10, 120, width+10, 70);
  fill(0);
  text(intA, v, 140);
  text(current, v, 160);
  text((int)yPos, v, 180);
}

int closest(int c, int a, int b) {
  int ca = abs(c-a); 
  int cb = abs(c-b); 
  if (ca < cb) {
    return a; 
  } else {
    return b; 
  }
}
