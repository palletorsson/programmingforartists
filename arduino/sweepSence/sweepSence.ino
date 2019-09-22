#include <Servo.h>

Servo myservo; 
int lightPin = A0;
int lightValue = 0; 
int pos = 0;
int isLooping = 0; 
int coolDown = 3000;

void setup() {
   Serial.begin(9600); 
   myservo.attach(9);  
}

void loop() {
  if (isLooping == 1) {
    lightValue = analogRead(lightPin); 
    Serial.println(lightValue); 
    if (lightValue > 400) {
   
        myservo.write(0);              
  
      delay(coolDown/2); 
     }
  
    else if (lightValue < 100) {

        myservo.write(90);              
        delay(coolDown*3);
    } else {
    
    } 
  } // end of isLooping
}
