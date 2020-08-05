int movingValue = 0; 

void setup() {
  size(600, 600);
}

void draw() {
  // skapa ett slumptal mellan -5 and 8
  int ranNumOne = floor(random(-5, 8)); 

  // öka värdet på movingValue med slumptalet 
  movingValue = addTwoNumbers(ranNumOne, movingValue);
  println(movingValue);
  // rita en linje 
  line(0, movingValue, width, movingValue); 
  // line(movingValue, 0, movingValue, height); 
  
  // en annan funktion, stämmer av värdet 
  movingValue = checkMoveValue(movingValue); 
  
}

int addTwoNumbers(int a, int b) {
  int sum = a+b; 
  return sum;
}

int checkMoveValue(int movingValue) {
  if (movingValue < 0) {
    movingValue = 5;
  }
  if (movingValue > height) {
    int pre = int(random(300000)); 
    save(pre+"cross.tiff");
    movingValue = 5; 
    background(135); 
  }
  println(movingValue);
  return movingValue; 
}
