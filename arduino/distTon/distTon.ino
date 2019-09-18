// definiera pinnummer
const int trigPin = 4;
const int echoPin = 5;
int redPin = 11;
int greenPin = 10;
int bluePin = 9;
// definiera variabler
long duration;
int distance;
const int soundPin1 = 7;
int dist = 0;
int lightPin = A0; 
 
void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);  
    pinMode(lightPin, OUTPUT);  
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
  
  if (distance < 40) {
    Serial.println("");
    Serial.println("Läser avstånd");
    Serial.println(distance);
    delay(distance); 
    dist = map(distance, 20, 10, 10, 250);
    Serial.println(dist);
     tone(lightPin, dist, 100);
    delay(100); // vänta toneLength  millisekunder
  } 

    
}
