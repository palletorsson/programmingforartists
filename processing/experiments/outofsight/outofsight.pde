float iter = 0; 
int shadow = 0; 
void setup() {
  size(1000, 1000, P3D);
  //ortho(-width/2, width/2, -height/2, height/2);
  strokeWeight(24);
  translate(width/2, height/2, -100);
  frameRate(8); 
}

void draw() {
  if (shadow == 20) {
    specular(random(255), random(255), random(255));
    shadow = 0;
  }
  translate(width/2, height/2, -100);
  // rotateX(PI/3+iter); 
  // rotateY(PI/3+iter); 
  rotateZ(PI/3+iter); 
  stroke(120, random(255), random(255), random(255));
  sphere(7700+iter*mouseY / 10);
  iter = iter+ 0.05;
  if (iter > 200) {
    iter = 0;
  }
  sphereDetail(mouseX / 10);
  shadow++; 
  specular(random(255), random(255), random(255));
}
