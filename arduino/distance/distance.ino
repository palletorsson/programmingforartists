// definiera pinnummer
const int trigPin = 9;
const int echoPin = 10;

// definiera variabler
long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT); // Sätt trigPin som en utgång
  pinMode(echoPin, INPUT); // Sätt echoPin som ingång 
  Serial.begin(9600); // Starta seriell kommunication
  Serial.println("Börjar läsa avstånd");
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
  
  if (distance < 20) {
    Serial.println("");
    Serial.println("Avstånd för kort");
    Serial.println(distance);
    delay(1000); 
    Serial.println("Läser avstånd igen ");
  } 
    
}
