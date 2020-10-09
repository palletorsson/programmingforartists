// click on ball 

Boolean ballExist = false; 
int posX; 
int posY; 
int diameter; 
float distance; 
void setup() {
 size(600,600); 
 background(0); 
}

void draw() {
 if(ballExist == false) {
   diameter = (int)random(40, 100);
   posX = (int)random(0, width);
   posY = (int)random(0, height);
   ellipse(posX, posY, diameter, diameter); 
   ballExist = true; 
 }
 distance = dist(mouseX, mouseY, posX, posY); 
 println(distance); 
 if (distance < diameter/2) {
   println("close"); 
   if (mousePressed == true) {
      background(0); 
      ballExist = false; 
   } 
 }
 // background(0); 
  ellipse(posX, posY, diameter, diameter); 
  posX = posX + (int)random(0, 4) -2;
  posY = posY + (int)random(0, 4) -2;
}
