
import processing.sound.*;

// Definera ljud variabler 
SoundFile sample;
Amplitude rms;

// Definiera en scale factor 
float scale = 1.0;

// Definiera en mjukhethetfaktor Declare
float smoothFactor = 0.25;
// Använd för mjukhet
float sum;

// Definiera hur stora ringarna skall vara 
int cellsize = 100; 
int halfsize = cellsize/2; 



void setup() {
  size(1400, 600);

  // Ladda och spela ett ljudfilen och loopa ljudet
  sample = new SoundFile(this, "test.mp3");
  sample.loop();

  // Skapa och aktivera amplitudmätare
  rms = new Amplitude(this);
  rms.input(sample);
  background(0);
  noStroke();
}      

void draw() {
  // mjukhet för amplitude-data med utjämningsfaktor
  sum += (rms.analyze() - sum) * smoothFactor;  
  
  // rms.analyze () returnera ett värde mellan 0 och 1. Det är
  // skalad till höjd / 2 och multipliceras sedan med en skalfaktor
  float rmsScaled = sum * (height/2) * scale;
  fill(mouseY/2, random(255), random(255), mouseX);
  
  for ( int i = halfsize; i < width; i=i+cellsize*2) {
    for ( int j = halfsize; j < height-cellsize; j=j+cellsize*2) {
      ellipse(i+halfsize, j+halfsize, rmsScaled, rmsScaled);
    }
  }
}
