int lightPin = A0;  // välj inmatningsstiftet för fotoresistor

int lightValue = 0; // variabel för att lagra värdet som kommer från fotoresistorn

void setup() {
  Serial.begin(9600); // sätter samplingfrequens för seriell kommunikation
}

void loop() {
  lightValue = analogRead(lightPin); // läs värdet från sensorn
  Serial.println(lightValue); // skriver ut de värden som kommer från sensorn till skärmen
  delay(50); // vänta 50 millisekunder
}
