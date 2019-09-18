import processing.serial.*;
Serial get;
float background_color;
String nameOfPort = "/dev/cu.usbmodem14111":
void setup()
{
  size(500,500);
  get = new Serial(this, nameOfPort, 9600);
  get.bufferUntil('\n'); 
}

void draw() {
  background(150, 50, background_color);
}

void serialEvent (Serial get) {
  background_color = float(get.readStringUntil('\n'));
}
