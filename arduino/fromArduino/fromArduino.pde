import processing.serial.*;
Serial myPort;
int background_color;

void setup()
{
  size(500,500);
  String nameOfPort = Serial.list()[2];
  println(nameOfPort);
  myPort = new Serial(this, nameOfPort, 9600);
  myPort.bufferUntil('\n'); 
}

void draw() {
  println(background_color); 
  background(150, background_color, background_color);
  if ( myPort.available() > 0) {
    background_color = int(myPort.readStringUntil('\n'));
  }
}
