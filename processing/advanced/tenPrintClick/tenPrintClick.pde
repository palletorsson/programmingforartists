int s = 23; // Tilestorlek
float odds = 0.5; // dela upp distribution

void setup() {
  size(500, 500);
  background(62, 67, 209);
  stroke(154, 156, 250);
  strokeWeight(4);
  
}

void draw () {}

void mouseClicked() {
  background(62, 67, 209);
  // generera linjer
  for (int y = 0; y < width; y += s) {
    for (int x = 0; x < height; x += s) {
      // Slumpvisa framåt- eller bakåt-streck
      if (random(1) < odds) {
        line(x, y, x + s, y + s);
      } else {
        line(x + s, y, x, y + s);
      }
    }
  }
}
