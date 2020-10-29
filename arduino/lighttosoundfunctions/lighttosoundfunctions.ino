
const int led = 13;
const int lightPin = A0; 
const int potPin = A1;   
const int buzzerPin = 8;

const int keys[] = {261,294,329,349,391,415,440,455,466,523,554,587,622,659,698,740,784,830,880};

int lightValue = 0;
int onoff = 0;
int counter = 0;
int potValue = 0; 
int durr = 0;

void setup() {
  pinMode(led, OUTPUT); 
  Serial.begin(9600);
}

void loop() {
  if (onoff) {
    toneAction();
    ledAction();
  } else {
    delay(100);
  }
  potAction();
  counting();
}

void toneAction() {
  tone(buzzerPin, keys[counter]);
  delay(lightValue);
}

void ledAction() {
    digitalWrite(led, HIGH); 
    delay(lightValue); 
    digitalWrite(led, LOW);
    delay(lightValue);   
    lightValue = analogRead(lightPin); 
    //Serial.println(lightValue);   
}

void potAction() {
  potValue = analogRead(potPin);
  Serial.println(potValue); 
  durr = potValue;
  if(potValue > 1) {
    onoff = 1;
  } else {
    onoff = 0;  
    tone(buzzerPin, 0, 200);
    delay(200);
  } 
}

void counting() {
  if(counter > sizeof(keys)) {
    counter = 0; 
  }
  counter++;
}
