int photocellPin = 0;     

void setup() {
  Serial.begin(9600);
}

void loop() {
  int photocellReading = analogRead(photocellPin);  
  Serial.println(photocellReading);    
  delay(100);
}
