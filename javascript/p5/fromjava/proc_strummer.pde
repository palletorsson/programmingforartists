PImage img;
int W = 750; // eget värde
int h = 732; // eget värde
String imgName = "svstrum.JPG";
int colort = 350; // ta alla vita färger
int reftish = 1;

void setup() {
  size(750, 732);
  img = loadImage(imgName);
  image(img, 0, 0, width, height);
}
void draw(){
  loadPixels();
  for (int i = 0; i < pixels.length-1; i++) {
    int rand = floor(random(400));
    if (i > W && rand < 1) {
      int c = pixels[i-(W)];
      float r = red(img.pixels[i]);
      float g = green(img.pixels[i]);
      float b = blue(img.pixels[i]);
      int cl = floor(r+g+b);
      // skapar den rinnande effekten
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
