int s = 23; // Tilestorlek
float odds = 0.4; // dela upp distribution
float odds2 = 0.41; // dela upp distribution
float odds3 = 0.45; // dela upp distribution

void setup() {
  size(500, 500);
  background(62, 67, 209);
  stroke(154, 156, 250);
  strokeWeight(4);
}

void draw() {
}

void mouseReleased() {
  background(62, 67, 209);
  // generera linjer
  for (int y = 0; y < width; y += s) {
    for (int x = 0; x < height; x += s) {
      // Random forward or backward slash
      float r = random(1);
      if (r < odds) {
        line(x, y, x + s, y + s);
      } else if (r < odds2 && r > odds) {
        line(x+s/2, y, x + s/2, y + s);
      }  else if (r < odds3 && r > odds) {
        line(x, y+s/2, x + s, y + s/2);
      }else {
        line(x + s, y, x, y + s);
      }
    }
  }
}
