float xPos = 0;
float yPos = 0;
float time = 0; 

void setup(){
  size(500,500); // theSize - 500
  background(255);
}

void draw(){
  xPos = noise(time);
  yPos = noise(time*1.1);
  xPos = map(xPos, 0, 1, 0, width); 
  yPos = map(yPos, 0, 1, 0, height);
  time = time + 0.01;  
  ellipse(xPos, yPos, 2, 2); 
}
