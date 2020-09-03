// storleken på bilden som jag använder
int w = 1048; 
int h = 699; 
PImage img;
String imgName = "zuckerberg.jpg"; 
int colort = 350; // tröskelvärdet - ta alla ljusa färger 
int reftish =  1; 

void setup() { 
  // storleken på bilden och canvas bör vara samma
  size(1048, 699); 
  img = loadImage(imgName);
  image(img, 0, 0, width, height);
}

void draw() {  
  loadPixels();
  for (int i = 0; i < pixels.length-1; i++) {
    int rand = floor(random(100)); 
    // inte första raden och vid 2% av pixlarna
    if (i > w && rand < 2) {
 
      // ta fram det samlade ljushets på pixeln
      float r = red(img.pixels[i]); // hämta värdet för rött 
      float g = green(img.pixels[i]); // hämta värdet för grön 
      float b = blue(img.pixels[i]); // hämta värdet för blått
      int cl = floor(r+g+b);

  
      // skapa den rinnande effekt kopiera färgen <- 
      // w (bildbrädden) i detta fall gör att bilden rinner 
      // för att vi kopierar pixel från raden under. 
      int c = pixels[i-w]; 

      // om ljushetsvädret är mindre än tröskelvärdet 
      if (cl < colort) {
        pixels[i] = c;
        //pixels[i+1] = c;
        //pixels[i-1] = c;
      }
    }
  }
  updatePixels(); 
  //save(imgName);
}

void mouseClicked() {
  image(img, 0, 0, width, height);
} 
