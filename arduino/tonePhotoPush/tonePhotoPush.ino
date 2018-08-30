int pushButton = 4;
int playState = 0; 

int lightPin = A0;  // välj inmatningsstiftet för fotoresistor

int lightValue = 0; // variabel för att lagra värdet som kommer från fotoresistorn
int tonePin = 8; // variabel för tonpin

int sensorLow = 500;
// variabel för att kalibrera högt värde
int sensorHigh = 180;

// variabel för tonlängd
int toneLength = 40; 

void setup() {
  Serial.begin(9600); // sätter samplingsfrekvens för seriell kommunikation
  pinMode(pushButton, INPUT);
}

void loop() {

  // läs värde från pushButton pinne
  int buttonState = digitalRead(pushButton);
  // playState logik
  if (buttonState == 1) {
    delay(400);
    if (playState == 1)  { 
      playState = 0;
    } else {
      playState = 1; 
    }    
  } 

  
  if (playState == 1) {
    lightValue = analogRead(lightPin); // läs värdet från sensorn
    Serial.println(lightValue); // skriver ut de värden som kommer från sensorn till skärmen
   
    // mappa sensorns värden mot pitch 
    int pitch = map(lightValue, sensorLow, sensorHigh, 110, 880);
  
    // spela tonen i toneLength ms på stift 8
    tone(tonePin, pitch, toneLength);
  
    delay(toneLength); // vänta toneLength  millisekunder
  } 
}
