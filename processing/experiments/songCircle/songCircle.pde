float r = 0; 

 
 import processing.sound.*;

// Declare the processing sound variables 
SoundFile sample;
Amplitude rms;
float root = 0.0; 
// Declare a scaling factor
float scale = 0.2;
int move = 100; 
// Declare a smooth factor
float smoothFactor = 1.25;

// Used for smoothing
float sum;
float theta;   
int isDrawing = 0;
void setup() {
  size(1400, 1000);
    //Load and play a soundfile and loop it
  sample = new SoundFile(this, "test.mp3");
  sample.loop();

  // Create and patch the rms tracker
  rms = new Amplitude(this);
  rms.input(sample);
  background(0); 
}

void draw() {

  noStroke();
  fill(255, 0, 150);

  // Smooth the rms data by smoothing factor
  sum += (rms.analyze() - sum) * smoothFactor;  

  // rms.analyze() return a value between 0 and 1. It's
  // scaled to height/2 and then multiplied by a scale factor
  float rmsScaled = sum * (height/2) * scale;

  // Draw an ellipse at a size based on the audio analysis
 // ellipse(move, height/2, rmsScaled, rmsScaled);
  // Polar to Cartesian conversion
  float x = r * cos(theta);
  float y = r * sin(theta);

  // Draw an ellipse at x,y
  //noStroke();
  fill(120, 0, random(255), random(255));
  // Adjust for center of window
  float ci = random(20); 
    if(isDrawing == 0) {
      ellipse(mouseX, mouseY, rmsScaled, rmsScaled);
      isDrawing = 1; 
  } else {
     isDrawing = 0;
     ellipse(x + width/2, y + height/2, rmsScaled, rmsScaled); 

  }
  
  // Increment the angle
  theta += 0.01;
  r = r + 0.05; 
}
