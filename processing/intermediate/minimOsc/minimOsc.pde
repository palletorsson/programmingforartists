import ddf.minim.*;
import ddf.minim.ugens.*;
 
Minim       minim;
AudioOutput out;
Oscil       wave;
 
void setup()
{
  size(512, 512);
  minim = new Minim(this);
 
  // använd metoden getLineOut för Minim-objektet för att få ett AudioOutput-objekt
  out = minim.getLineOut();
 
  // skapa en sinusvåg Oscil, inställd på 440 Hz, vid 0,5 amplitud
  wave = new Oscil( 440, 0.5f, Waves.SINE );
  
  // patcha the Oscil to the output
  wave.patch( out );
}
 
void draw()
{
  float amp = map( mouseY, 0, height, 1, 0 );
  wave.setAmplitude( amp ); 
  float freq = map( mouseX, 0, width, 110, 880 );
  wave.setFrequency( freq );
  point(mouseY, mouseX); 
}
 
