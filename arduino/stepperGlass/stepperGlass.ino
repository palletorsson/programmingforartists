// Adafruit Motor shield library
// copyright Adafruit Industries LLC, 2009
// this code is public domain, enjoy!

#include <AFMotor.h>
const int stepsPerRevolution = 100;

// Connect a stepper motor with 48 steps per revolution (7.5 degree)
// to motor port #2 (M3 and M4)

AF_Stepper motor_1(stepsPerRevolution, 1);

AF_Stepper motor_2(stepsPerRevolution, 2);


int move = 1; 
int theTimes = 10000; 
void setup() {
  Serial.begin(9600);           // set up Serial library at 9600 bps
  Serial.println("Stepper test!");

  motor_1.setSpeed(20);  // 10 rpm   
  motor_2.setSpeed(20);  // 10 rpm  
}

void loop() {
  if (move == 1) {
    Serial.println("Double coil steps 300");
    motor_2.step(50, FORWARD, DOUBLE); 
    delay(theTimes);
    motor_1.step(50, FORWARD, DOUBLE); 
    delay(theTimes);
    motor_2.step(50, BACKWARD, DOUBLE);
    delay(theTimes);
    motor_1.step(50, BACKWARD, DOUBLE);    
    delay(theTimes);
  }
}
