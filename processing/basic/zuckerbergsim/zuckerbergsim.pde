PImage img;
int w = 1048; 
int h = 699; 
String imgName = "zuckerberg.jpg"; 
int colort = 350; // ta alla vita färger 
int reftish =  1; 
int show = 0; 
void setup() { 
  size(1048, 699); 
  img = loadImage(imgName);
  image(img, 0, 0, width, height);
  noStroke(); 
}

void draw() {  
 if (show == 1) {
  for (int x = 0; x < width; x=x+8) {
 
    for (int y = 0; y < height; y=y+8) {
      
      int loc = x + y * width;
      color pixcolor = img.pixels[loc];
      fill(pixcolor);
      rect(x, y, 8, 8);
      
     }
  }

  //save(imgName);
 }
}
