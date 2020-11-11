int message = 0; 
int lf = 10;
void setup() 
{
//initialize serial communications at a 9600 baud rate
Serial.begin(9600);
randomSeed(analogRead(0));
}

void loop()
{  

   if (Serial.available())
      {
        char state = Serial.read(); 
        int r = random(255);
     
   if (state== '1') {
 

     Serial.println(r); 
   }
   if (state== '2') {
  
     Serial.println(r);
   }
   if (state == '3') {
   
 
     Serial.println(r);
   }
   delay(1000);
    }
}
