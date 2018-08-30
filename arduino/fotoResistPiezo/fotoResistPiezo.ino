int lightPin = A0;  // välj inmatningsstiftet för fotoresistor

int lightValue = 0; // variabel för att lagra värdet som kommer från fotoresistorn

// variabel för att kalibrera lågt värde
int sensorLow = 321;
// variabel för att kalibrera högt värde
int sensorHigh = 69;

// variabel för tonlängde
int toneLength = 20; 

void setup() {
  Serial.begin(9600); // sätter samplingfrequens för seriell kommunikation
}

void loop() {
  lightValue = analogRead(lightPin); // läs värdet från sensorn
  Serial.println(lightValue); // skriver ut de värden som kommer från sensorn till skärmen
 
  // mappa sensorns värden mot pitch 
  int pitch = map(lightValue, sensorLow, sensorHigh, 50, 4000);

  // spela tonen i toneLength ms på stift 8
  tone(8, pitch, toneLength);

  delay(toneLength); // vänta toneLength  millisekunder
}
