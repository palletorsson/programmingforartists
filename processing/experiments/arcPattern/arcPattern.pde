int show = 1; 
int redraw = 0; 

void setup() {
  size(600, 600);
  background(255);
  smooth();
  fill(125);
  stroke(1);
}


void draw() {
   if (redraw == 4) {
    background(0);
    redraw = 0; 
   }
  
   if (show == 1) {  
      for(int j=2; j < 12; j++) {
        for(int i=2; i < 12; i++) {
          fill(120, 0, random(255), random(255));
          int r = int(random(4)+1);
          print(r);
          if (r == 1) {
            arc(j*50-50, i*50-50, 100, 100, 0, PI / 2.0); // lower quarter circle 
          } else if (r == 2) {
           
            arc(j*50, i*50-50, 100, 100,  PI / 2.0, PI);
          } else if (r == 3) {
          
            arc(j*50, i*50, 100, 100, PI, 3*PI/2);
          } else {
            arc(j*50-50, i*50, 100, 100, 3*PI/2, 0);
          }
        }
      }
    }
    delay(2000);
}
