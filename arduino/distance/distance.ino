// definiera pinnummer
const int trigPin = 4;
const int echoPin = 5;

// definiera variabler
long duration;
int distance;
const int soundPin1 = 7;
 
void setup() {
  pinMode(trigPin, OUTPUT); // Sätt trigPin som en utgång
  pinMode(echoPin, INPUT); // Sätt echoPin som ingång 
  Serial.begin(9600); // Starta seriell kommunication
  Serial.println("Börjar läsa avstånd");
  pinMode(soundPin1, OUTPUT); 
}
void loop() {
  // återställ trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sicka ultraljud trigPin i 10 microsekonder
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Läse echoPin - hur långt hann ljudet färdas på 10 mikroseknder
  duration = pulseIn(echoPin, HIGH);
  // Räkna ut avståndet 
  distance= duration*0.034/2;
  // Om avståndet är för kort skriv ut avståndet i det seriella fönstret
  
  if (distance < 100) {
    Serial.println("");
    Serial.println("Läser avstånd");
    Serial.println(distance);
    delay(distance); 
  } 
  int pitch = map(distance, 0, 100, 200, 50);
  tone(soundPin1, pitch, pitch);
    
}
