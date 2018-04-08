int y = 100;
int x = 200;
int what = 0;

// The statements in the setup() function 
// execute once when the program begins
void setup() {
  size(840, 660);  // Size must be the first statement
  stroke(255);     // Set line drawing color to white
  frameRate(60);
  background(0); 
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
void draw() { 
 // background(0);   // Clear the screen with a black background
  y = y - 1; 
  x = x - 1; 
  if (y < -300) { 
    y = height; 
    x = width; 
    background(255,125,125); 
    
    if (what == 1) {
      what = 0; 
    } else {
      what = 1;
    }
  } 
  
  stroke(y,255,255);
  // line(x1, y1, x2, y2)
  int r = floor(random(-5, 5)); 
  int mX = floor(mouseX/50); 
  int mY = floor(mouseY/50);
   if (what == 1) {
  line(0, y, width, y);  
  stroke(y,0,255);
  line(0, y+mX, width, y+mX); 
   } else {
  line(x, 0, x, 1000); 
  stroke(y,0,255);
  line(x+mY, 0, x+mY, 1000); 
   }
} 