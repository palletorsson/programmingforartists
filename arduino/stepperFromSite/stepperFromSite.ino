/*************************************************************
Motor Shield Stepper Demo
by Randy Sarafan

For more information see:
https://www.instructables.com/id/Arduino-Motor-Shield-Tutorial/

*************************************************************/

int delaylegnth = 30;
int turning = 0; 
int buttonPin = 2; 
int buttonState = 0; 
void setup() {
  
  //establish motor direction toggle pins
  pinMode(12, OUTPUT); //CH A -- HIGH = forwards and LOW = backwards???
  pinMode(13, OUTPUT); //CH B -- HIGH = forwards and LOW = backwards???
  
  //establish motor brake pins
  pinMode(9, OUTPUT); //brake (disable) CH A
  pinMode(8, OUTPUT); //brake (disable) CH B
  
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
  
  
}

void loop(){
 buttonState = digitalRead(buttonPin);
 if (turning == 1) {
  dOne();
 }
 if (turning == 2) {
  dTwo();
 }
 if (buttonState == HIGH) {
  
  turning++; 
  if (turning > 2) {
    turning = 0; 
  }
 
  delay(500);
 }
}

void dOne() {
  
  digitalWrite(9, LOW);  //ENABLE CH A
  digitalWrite(8, HIGH); //DISABLE CH B

  digitalWrite(12, HIGH);   //Sets direction of CH A
  analogWrite(3, 255);   //Moves CH A
  
  delay(delaylegnth);
  
  digitalWrite(9, HIGH);  //DISABLE CH A
  digitalWrite(8, LOW); //ENABLE CH B

  digitalWrite(13, LOW);   //Sets direction of CH B
  analogWrite(11, 255);   //Moves CH B
  
  delay(delaylegnth);
  
  digitalWrite(9, LOW);  //ENABLE CH A
  digitalWrite(8, HIGH); //DISABLE CH B

  digitalWrite(12, LOW);   //Sets direction of CH A
  analogWrite(3, 255);   //Moves CH A
  
  delay(delaylegnth);
    
  digitalWrite(9, HIGH);  //DISABLE CH A
  digitalWrite(8, LOW); //ENABLE CH B

  digitalWrite(13, HIGH);   //Sets direction of CH B
  analogWrite(11, 255);   //Moves CH B
  
  delay(delaylegnth);
}

void dTwo() {
  
  
    digitalWrite(9, LOW);  //ENABLE CH A
  digitalWrite(8, HIGH); //DISABLE CH B

  digitalWrite(12, HIGH);   //Sets direction of CH A
  analogWrite(3, 255);   //Moves CH A
  
  delay(delaylegnth);
  
  digitalWrite(9, HIGH);  //DISABLE CH A
  digitalWrite(8, LOW); //ENABLE CH B

  digitalWrite(13, HIGH);   //Sets direction of CH B
  analogWrite(11, 255);   //Moves CH B
  
  delay(delaylegnth);
  
  digitalWrite(9, LOW);  //ENABLE CH A
  digitalWrite(8, HIGH); //DISABLE CH B

  digitalWrite(12, LOW);   //Sets direction of CH A
  analogWrite(3, 255);   //Moves CH A
  
  delay(delaylegnth);
    
  digitalWrite(9, HIGH);  //DISABLE CH A
  digitalWrite(8, LOW); //ENABLE CH B

  digitalWrite(13, LOW);   //Sets direction of CH B
  analogWrite(11, 255);   //Moves CH B
  
  delay(delaylegnth);
}
