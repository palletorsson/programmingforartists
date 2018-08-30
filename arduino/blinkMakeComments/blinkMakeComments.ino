// definera en varibel
int led = 13;
int delayValue = 100; 
int addValue = 30; 

// setup använder samma princip som processing
void setup() {              
  pinMode(led, OUTPUT); // sätt port 13 till en utsignal 
}

// loop använder samma princip som i processings draw() 
void loop() {
  digitalWrite(led, HIGH); // sätt på lampan
  delay(delayValue); // vänta 500 millisekunder  
  digitalWrite(led, LOW); // stäng av lampan
  delay(delayValue); // vänta 500 millisekunder
  delayValue = delayValue + addValue; 
  if (delayValue > 300 || delayValue < 40) {
    addValue = -addValue; 
  }    
}

// gör om detta värdet för delay(värde) till en variabel 
// int delayValue = 100; 
// ändra värdet kontinuerlig med en loop

