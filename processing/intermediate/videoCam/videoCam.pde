  
import processing.video.*;

Capture cam;

void setup() {
  fullScreen();
  //  size(640, 480);

  String[] cameras = Capture.list();
  
  if (cameras.length == 0) {
    println("There are no cameras available for capture.");
    exit();
  } else {
    println("Available cameras:");
    for (int i = 0; i < cameras.length; i++) {
      println(i); 
      println(cameras[i]);
    }
    
    // The camera can be initialized directly using an 
    // element from the array returned by list():
    if (cameras.length > 16) {
      cam = new Capture(this, cameras[22]);
    } else {
       cam = new Capture(this, cameras[7]);
    }
    cam.start();     
  }      
}

void draw() {
  if (cam.available() == true) {
    cam.read();
    cam.resize(width, height);
  }
  
  image(cam, 0, 0);
  // The following does the same, and is faster when just drawing the image
  // without any additional resizing, transformations, or tint.
  //set(0, 0, cam);
}
