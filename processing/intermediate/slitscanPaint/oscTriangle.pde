import processing.sound.SinOsc;

SinOsc osc1;
SinOsc osc2;
SinOsc osc3;

int f1 = 0; 
int f2 = 0;
int f3 = 0;
int c_f1 = 2; 
int c_f2 = 4;
int c_f3 = 3;

void setup() {
  size(880, 880);
  osc1 = new SinOsc(this);
  osc1.freq(220);
  osc1.play();
  osc2 = new SinOsc(this);
  osc2.freq(330);
  osc2.play();
  osc3 = new SinOsc(this);
  osc3.freq(440);
  osc3.play();
  fill(255, 0, 255);
}

void draw() {
  //background(0);
  osc1.freq(f1);
  osc2.freq(f2);
  osc3.freq(f3);

  f1 = f1 + c_f1; 
  if (f1 > 880 || f1 < 0) {
    c_f1 = c_f1*-1;
  }

  f2 = f2 + c_f2; 
  if (f2 > 880 || f2 < 0) {
    c_f2 = c_f2*-1;
  }

  f3 = f3 + c_f3;
  if (f3 > 880 || f3 < 0) {
    c_f3 = c_f3*-1;  
    background(200);
  }
  triangle(f1, f2, f2, f3, f3, f1);
}
