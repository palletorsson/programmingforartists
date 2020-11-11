import processing.serial.*;
Serial myPort;
int inInt;
String value;
int state = 1; 

float r = 255;
float g = 0; 
float b = 0;
int lf = 10;
String myString = null;
String background_color = "000";   
int count = 0; 
void setup() {
  size(400, 400);
  println("Available serial ports:");
  println(Serial.list());
  myPort = new Serial(this, Serial.list()[2], 9600);
  myPort.bufferUntil ( '\n' );   // Receiving the data from the Arduino IDE
}

void draw() {
  background ( r, g, parseFloat(background_color) ); 
  switch(state) {
    case 1: 
      myPort.write("1");
      state = 2;
      break;
    case 2: 
      myPort.write("2");
      state = 3; 
      break;
    case 3: 
      myPort.write("3");
      state = 1;
      break;
    default: 
          break;
  }

  delay(100); 
  myPort.clear();

}
  
void serialEvent  (Serial myPort) {
    background_color  =  myPort.readStringUntil ( '\n' ) ;  // Changing the background color according to received data
   
    if(parseFloat(background_color) > 0) {
     println(parseFloat(background_color));
      if(count == 0) {
          r = parseFloat(background_color); 
          count = 1; 
      } else if (count == 1) {
          g = parseFloat(background_color); 
          count = 2; 
      } else if (count == 2) {
          b = parseFloat(background_color); 
          count = 0; 
      }
    }
    
} 
