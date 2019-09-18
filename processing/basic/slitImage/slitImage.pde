PImage img;
PImage sorted;
int w = 400; 
int h = 267; 
String imgName = "zuckerbergs.jpg"; 
int amount  = 1000; 
int index = 0; 
int stepper = 1; 
color cRed = color(255, 0, 255);
color cBlack = color(0);
// JSONObject dictPixels;
boolean run = true;

void setup() { 
  size(400, 267); 
  img = loadImage(imgName);
  image(img, 0, 0);
}

void draw() {  
  background(0); 
  img.loadPixels();
 if (index > img.pixels.length-1000) {
    index = 0; 
    stepper = 1;
  }
   
  for (int g = 0; g < 1000; g++) {
    // find next brighter pixel
   if (index+stepper > img.pixels.length-1) {
      stepper = 0; 
    
    }
    int rand = floor(random(img.pixels.length));
    float currentPixelB = brightness(img.pixels[index]); 
    float otherPixelB = brightness(img.pixels[rand]); 
    
    if (currentPixelB < otherPixelB) {
      println("brighter", index); 
      color temp = img.pixels[index]; 
      img.pixels[index] = img.pixels[rand]; 
      img.pixels[rand] = temp;
      // then test next pixel 
      index++; 
      // reset stepper 
      stepper = 1;
      run = false; 
    } 
    }
   
 
 
  
  img.updatePixels(); 

 //println(dictPixels);
  image(img, 0, 0);
}

  
