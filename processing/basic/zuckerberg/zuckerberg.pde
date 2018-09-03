PImage img;
int w = 1048; 
int h = 699; 
String imgName = "zuckerberg.jpg"; 
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
    int rand = floor(random(100)); 
    // inte första raden och vid 1% av pixlarna
    if (i > w && rand < 1) {
      int c = pixels[i-(w)];  
      float r = red(img.pixels[i]); // hämta värdet för rött 
      float g = green(img.pixels[i]); // hämta värdet för grön 
      float b = blue(img.pixels[i]); // hämta värdet för blått
      int cl = floor(r+g+b);
      // skapa den rinnande effekt kopiera färgen <- 
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
