int s = 23; // Tile Size
float odds = 0.5; // Slash distribution

void setup() {
  size(500, 500);
  background(62, 67, 209);
  stroke(154, 156, 250);
  strokeWeight(4);
  
}

void draw () {}

void mouseClicked() {
  background(62, 67, 209);
  // Loops generate grid of lines
  for (int y = 0; y < width; y += s) {
    for (int x = 0; x < height; x += s) {
      // Random forward or backward slash
      if (random(1) < odds) {
        line(x, y, x + s, y + s);
      } else {
        line(x + s, y, x, y + s);
      }
    }
  }
}
