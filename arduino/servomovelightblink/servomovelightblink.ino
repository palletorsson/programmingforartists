#include <Servo.h> 
Servo myservo; 

int pos = 20;

void setup() {
  myservo.attach(9);
}

void loop() {
  pos++; 
  Serial.println(pos); 
  myservo.write(pos);
  delay(15); 
  if (pos > 120) {
    pos = 0; 
    delay(4000); 
  }
  if (pos == 1) {
    delay(2000); 
    }
}
