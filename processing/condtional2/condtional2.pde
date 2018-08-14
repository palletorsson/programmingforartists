
int count = 0;
int zoom = 1000; 
int zoomConst = 1000; 
void setup() {
    size(1000, 500);
    //frameRate(5);
}

void draw() {
   count++; // "shorthand" för count = count + 1; 
   zoom--; 
   if (count % 128 == 0) { 
     stroke(255,0,0);
     fill(255,0,0);
       rect(width/2-zoom/2, height/2 - zoom/2, zoom, zoom);
   } else if (count % 32 == 0) {
     stroke(0,0,255);
     fill(0,0,255);
      ellipse(width/2, height/2, zoom, zoom);
   }  else if (count % 16 == 0) {
     stroke(0,255,0);
     fill(0,255,0);
       rect(width/2-zoom/2, height/2 - zoom/2, zoom, zoom);
   } 
   
 
   
   if(zoom < 0) {
     noLoop();
   
   }
}


// Test:
// byt ut point(mouseX, mouseY);
// mot ellipse(mouseX, mouseY, 10, 10);
// Vad tror du kommer hända? 
// vad händer om man dubblerar och kastar om x och y? 
