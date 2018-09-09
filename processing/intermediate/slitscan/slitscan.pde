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

void setup() {
  myVideo = new Movie(this, "input.mp4");
  size(1600, 500, P2D);
  background(0);
  myVideo.loop();
}

void draw() {
  if (myVideo.available()) {
    myVideo.read();
    myVideo.loadPixels();
    // copy(src, sx, sy, sw, sh, dx, dy, dw, dh)
    copy(myVideo, (myVideo.width/2), mouseY/4, mouseY/4+6, myVideo.height, (x%width), 0, 6, height);
    myVideo.updatePixels();
    x++;
  }
}
