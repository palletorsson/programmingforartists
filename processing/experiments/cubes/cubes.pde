float iter = 0; 
int shadow = 0; 
void setup() {
  size(1000, 1000, P3D);
  ortho(-width/2, width/2, -height/2, height/2);
  strokeWeight(14);
  translate(width/2, height/2, -100);
}

void draw() {
  if(shadow == 2) {
  background(255);
  shadow = 0; 
  }
//  stroke(random(255), random(255), random(255));
  translate(width/2, height/2, -100);
  stroke(0);
  noFill();
  rotateX(PI/3+iter); 
  rotateY(PI/3+iter); 
  rotateZ(PI/3+iter); 
  box(400);
  /// stroke(random(255), random(255), random(255));
  //translate(width/2, height/2, -100);
  
  rotateZ(PI/3+iter); 
 
 rotateX(PI/3+iter); 
 box(400);
 rotateY(PI/3+iter); 
 
  box(400);
 
  iter = iter + 0.001;
  shadow++;
}
