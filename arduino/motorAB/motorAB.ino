
//  Function        Channel A     Channel B
//  Direction       Digital 12    Digital 13
//  Speed (PWM)     Digital 3     Digital 11
//  Brake           Digital 9     Digital 8
//  Current Sensing Analog 0      Analog 1

// Kanal A enligt ovan 
int channelA_Motor12 = 12; 
int channelA_Speed3 = 3; 
int channelA_Brake9 = 9; 

// Kanal B enligt ovan 
int channelB_Motor13 = 13; 
int channelB_Speed11 = 11;
int channelB_Brake8 = 8; 

int moveAFarward = 0; 
int moveBFarward = 0; 
int moveABFarward = 0;
int moveABackward = 0; 
int moveBBackward = 0; 
int moveABBackward = 0; 

void setup() {
  // init Kanal A
  pinMode(channelA_Motor12, OUTPUT); 
  pinMode(channelA_Brake9, OUTPUT);  

  // init Kanal B
  pinMode(channelB_Motor13, OUTPUT); 
  pinMode(channelB_Brake8, OUTPUT);  
}

void loop() {
  if (moveABackward == 1) { // a rullar bakat på framåt för att motprn är vänd
    forwardA();  
    delay(1000);
    brakeAll();
    delay(1000);
  }
  if (moveBFarward == 1) { 
    forwardB();
    delay(1000);
    brakeAll();
    delay(1000);
  }
  if (moveABFarward == 1) { 
    forwardA(); 
    forwardB();
    delay(1000);
    brakeAll();
    delay(1000);
  }
  if (moveAFarward == 1) { // a rullar bakat på framåt för att motprn är vänd
    backwardA();
    delay(1000);
    brakeAll();
    delay(1000);
  }
  if (moveBBackward == 1) { 
    backwardB();
    delay(1000);
    brakeAll();
    delay(1000);
  }
  if (moveABBackward == 1) { 
    backwardA();
    backwardB();
    delay(1000);
    brakeAll();
    delay(1000);
  }
  
}

void forwardA() {
  // kanal A
  digitalWrite(channelA_Motor12, HIGH); 
  digitalWrite(channelA_Brake9, LOW);  
  analogWrite(channelA_Speed3, 123); 
}
void forwardB() {
  // kanal B  
  digitalWrite(channelB_Motor13, HIGH); 
  digitalWrite(channelB_Brake8, LOW);  
  analogWrite(channelB_Speed11, 123);  
}


void backwardA() {
  // kanal A
  digitalWrite(channelA_Motor12, LOW); 
  digitalWrite(channelA_Brake9, LOW);  
  analogWrite(channelA_Speed3, 123); 
}

void backwardB() {
  // kanal B  
  digitalWrite(channelB_Motor13, LOW); 
  digitalWrite(channelB_Brake8, LOW);  
  analogWrite(channelB_Speed11, 123);  
}



void brakeAll() {
  digitalWrite(channelA_Brake9, HIGH);  
  digitalWrite(channelB_Brake8, HIGH); 
}
