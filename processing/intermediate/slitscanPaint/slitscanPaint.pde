import processing.video.*;

Movie myVideo;
int video_width     = 450;
int video_height    = 360;
int video_slice_x   = video_width/2;
int window_width    = 1000;
int window_height   = video_height;
int draw_position_x = 0; 
boolean newFrame  = false;
int x=0;
color[] colorsList = new color[video_width];
int lastMouseX = 0; 
int lastMouseY = 0; 

void setup() {

  fullScreen();
  // size(800,800);
  strokeWeight(3);

  for (int i = 0; i < video_width; i++) {
    colorsList[i] = color(random(255));
  }
  myVideo = new Movie(this, "input.mp4");
  background(255);
  myVideo.loop();
}

void draw() {
  if (myVideo.available()) {
    myVideo.read();
    myVideo.loadPixels();
    x++;
    if(x == 3) {
    x=0; 
  }
    for (int i = 0; i < video_width-1; i++) {
      colorsList[i] = myVideo.pixels[i * video_slice_x];
    }
    for (int j = 0; j < video_width; j++) {
      stroke(colorsList[j]); 
      line(lastMouseX+x, lastMouseY+j-video_slice_x, mouseX+x, mouseY+j-video_slice_x);
      
  }
    if (x > height) {
      x = 0;
    }
    myVideo.updatePixels();
    lastMouseY = mouseY; 
    lastMouseX = mouseX;
  }
  myVideo.speed((float) mouseY/(width/3));
}
