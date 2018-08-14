 
int redPin = 11;
int greenPin = 10;
int bluePin = 9;

int redVal = 0;
int greenVal = 0;
int blueVal = 0;

int redFace = 1;
int greenFace = 0;
int blueFace = 0;
 
void setup()
{
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);  
}
 
void loop()
{ 
  setColor(redVal, greenVal, blueVal); 
  delay(100); 
  if (redFace == 1) {
    redVal++; 
    if (blueVal > 3) {
      blueVal--; 
    }
    if (redVal > 254)  {
      redFace = 0;
      greenFace = 1;
    }    
  } else if (greenFace == 1) {
    greenVal++;
    redVal--;
    if (greenVal > 254)  {
      greenFace = 0;
      blueFace = 1;
    }
    
  } else {
    blueVal++; 
    greenVal--;
    if (blueVal > 254)  {
      blueFace = 0;
      redFace = 1;
    }    
  }
}
  
 
void setColor(int red, int green, int blue)
{
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);  
}
