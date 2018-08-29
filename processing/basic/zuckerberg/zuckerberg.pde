PImage img;
int w = 1048; 
int h = 699; 
String imgName = "fman13.jpg"; 
int colort = 350; // ta alla vita färger 
int reftish =  1; 

void setup() { 
  size(1048,699); 
  img = loadImage(imgName);
  image(img, 0, 0, width, height);
}

void draw() {  
  loadPixels();
  for (int i = 0; i < pixels.length-1; i++) {
    int rand = floor(random(1000)); 
    if (i > w && rand < 90) {
      int c = pixels[i-(w)];  
      float r = red(img.pixels[i]);
      float g = green(img.pixels[i]);
      float b = blue(img.pixels[i]);
      int cl = floor(r+g+b); 
      
      if (cl < colort) {
         pixels[i] = c;
         pixels[i+1] = c;
         pixels[i-1] = c;
      }
    }
  }
  updatePixels(); 
  //save(imgName);   
}
