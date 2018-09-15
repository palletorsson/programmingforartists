// 10 print i processing

int s = 23; // Tilestorlek
float odds = 0.2; // dela upp distribution
float odds2 = 0.3; // dela upp distribution
float odds3 = 0.4; // dela upp distribution

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
      float num = (float) randomGaussian();
      float sd = 60;
      float mean = 320;
      float v = sd * num + mean;
      println(v/1000); 
      if (v/1000 < odds) {
        line(x+s/2, y, x + s/2, + s);
      } else if (v/1000 < odds2 && v/1000 > odds) {
        line(x + s, y, x, y + s);
      } else if (v/1000 < odds3 && v/1000 > odds2) {
        line(x, y+s/2, x + s, y + s/2);
      } else {
        line(x, y, x + s, y + s);
      }
    }
  }
}
