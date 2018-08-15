int delaylegnth = 30;

int moveA = 1; 
int moveB = 0; 
int stopAll = 0;
int count = 0; 
int isStoped = 0; 

void setup() {
  
  //establish motor direction toggle pins
  pinMode(12, OUTPUT); //CH A -- HIGH = forwards and LOW = backwards???
  pinMode(13, OUTPUT); //CH B -- HIGH = forwards and LOW = backwards???
  
  //establish motor brake pins
  pinMode(9, OUTPUT); //brake (disable) CH A
  pinMode(8, OUTPUT); //brake (disable) CH B 
  
  Serial.begin(9600);
}

void loop(){
  
 if (moveA == 1) {
   DirOne();
 }

  if (moveB == 1) {
   DirTwo();
 }
 
 if (stopAll == 1) {
   StopAll();
 }
 
 count++;
 
  if (count > 100) {
    if (isStoped == 0) {
      stopAll = 1; 
      isStoped = 1;
    }
    moveA = 0; 
  } 
  
  if (count > 140) {
      isStoped = 0; 
      moveB = 1;  
   }

   if (count > 180) {
     if (isStoped == 0) {
      stopAll = 1; 
      isStoped = 1;
      moveB = 0; 
    }
    
   }
   if (count > 200) {
    count = 0; 
    moveA = 1;
   }
   
  Serial.println(isStoped);
}


void DirOne() {

  digitalWrite(9, LOW);     // ENABLE  CH A
  digitalWrite(8, HIGH);    // DISABLE CH B

  digitalWrite(12, HIGH);   // Sets direction of CH A
  analogWrite(3, 255);      // Moves CH A
  
  delay(delaylegnth);
  
  digitalWrite(9, HIGH);    // DISABLE CH A
  digitalWrite(8, LOW);     // ENABLE  CH B

  digitalWrite(13, LOW);    // Sets direction of CH B
  analogWrite(11, 255);     // Moves CH B
  
  delay(delaylegnth);
  
  digitalWrite(9, LOW);     // ENABLE  CH A
  digitalWrite(8, HIGH);    // DISABLE CH B

  digitalWrite(12, LOW);    // Sets direction of CH A
  analogWrite(3, 255);      // Moves CH A
  
  delay(delaylegnth);
    
  digitalWrite(9, HIGH);    // DISABLE CH A
  digitalWrite(8, LOW);     // ENABLE CH B

  digitalWrite(13, HIGH);   // Sets direction of CH B
  analogWrite(11, 255);     // Moves CH B
  
  delay(delaylegnth);
  
}

void StopAll() {
    digitalWrite(9, HIGH);    // DISABLE CH A
    delay(delaylegnth);
    digitalWrite(8, HIGH);    // DISABLE CH B
    delay(delaylegnth);
  }

void DirTwo() {
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
