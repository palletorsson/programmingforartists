
int res = 40; 
int index = 0; 
// once
void setup() {
  size(600, 600); 
  frameRate(12); 
}

// loop
void draw() {

 // the x is the horizontal position 
 for (int x = 0; x < width/res; x = x + 1) {
  // the y is the vertical position 
  for (int y = 0; y < width/res; y = y + 1) {
     rect(res * y, res * x , res, res);
     if (index % 23 == 0) {
       fill(random(255), random(255), random(255)); 
     } else {
       fill(random(255)); 
     }
       index++; 
  }

  //save("random" + index + ".jpg"); 
  if (index > 100) {
    //  noLoop(); 
  }

 }
 
 

  // noLoop();
} // end of draw 
