
int myPosX = 10; 
int myPosY = 10; 
int myMovementX = 4; 
int myMovementY = 4; 

void setup() {
  size(500, 400);
}

void draw() {

  //background(255); 
 
  myPosX = myPosX + myMovementX;
  myPosY = myPosY + myMovementY;

  if (myPosX > width || myPosX < 0) {
    myMovementX = myMovementX * -1;    
  }
   
  // myMovementX = myMovementX + int(random(4)) - 2; 
   

  if (myPosY > height || myPosY < 0) {
    myMovementY = myMovementY * -1;
    
  }

  ellipse(myPosX, myPosY, 40, 40);
}
