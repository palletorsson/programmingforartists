char[] alfabet = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'};
int textlen = 8;
int[] indexes = new int[textlen];
String finalstring = "";
void setup() {
  size(600, 600);
  textSize(40);
  frameRate(3);
}
void draw() {
  background(0);
  // fill(mouseX, mouseY, dist(mouseX, mouseX, mouseY, mouseY));
  finalstring = "";
  textlen = (int)random(2, 8);
  for (int i = 0; i < textlen; i++) {
    indexes[i] = (int)random(0, alfabet.length);
  }
  for (int i = 0; i < textlen; i++) {
    finalstring = finalstring + alfabet[indexes[i]];
  }
  text(finalstring, mouseX, mouseY);
}
