int s = 23; // vi sätter Tilestorlek
float odds = 0.5; // och dela upp distribution
float r = 0; 

void setup() {
  size(500, 500);
  background(62, 67, 209);
  stroke(154, 156, 250);
  strokeWeight(4);
}

void draw () {} // hmm...

void mouseClicked() {
  background(62, 67, 209);
  // generera linjer
  for (int y = 0; y < width; y += s) {
    for (int x = 0; x < height; x += s) {
      // Slumpvisa framåt- eller bakåt-streck
      r = random(1);
      if (r < odds) {
        line(x, y, x + s, y + s);
      } else {
        line(x + s, y, x, y + s);
      }
    }
  }
}
