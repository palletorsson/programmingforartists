float[][] p, v, a;
int[][] unicoord;
PImage img;

void setup() {
  size(800, 600);
  colorMode(RGB, 2);
  background(1);
  img = loadImage("IMG_1425_opamp_plant.jpg");
  image(img, width, height); 
  p = new float[width][height];
  v = new float[width][height];
  a = new float[width][height];
  
  unicoord = new int[width][height];
  int pixel = 0;
  for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
      unicoord[x][y] = pixel++;
    }
  }
  
  loadPixels();
}

void draw() {
  for (int x = 1; x < width-1; x++) {
    for (int y = 1; y < height-1; y++) {
      a[x][y] = (v[x-1][y] + v[x+1][y] + v[x][y-1] + v[x][y+1]) * 0.25 - v[x][y];
    }
  }
  
  for (int x = 1; x < width-1; x++) {
    for (int y = 1; y < height-1; y++) {
      v[x][y] += a[x][y];
      p[x][y] += v[x][y];
      pixels[unicoord[x][y]] = color(sin(p[x][y]) + 1, cos(p[x][y]), 1);
    }
  }
  
  updatePixels();
}

void move() {
  if (mouseX > -1    &&    mouseX < width    &&    mouseY > -1    &&    mouseY < height) {
    v[mouseX][mouseY] = randomGaussian() * TAU;
  }
}

void mouseClicked() {
  move();
}

void mouseDragged() {
  move();
}
