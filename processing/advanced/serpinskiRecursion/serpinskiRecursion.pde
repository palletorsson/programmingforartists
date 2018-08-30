int iterations = 1; 
void setup() {
  size(1000, 1000);
  background(200, 100, 100);
  smooth();
}

void draw() {}

void mouseReleased() {
  triangleSier(0, 900, 500, 0, 1000, 900, iterations);
  iterations++;
  if (iterations == 8) {
    iterations = 0;
    background(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));  
  }
}
void triangleSier(float x1, float y1, float x2, float y2, float x3, float y3, int n) {
 
  // 'n' är antalet iterationer.
  if ( n > 0 ) {
    
    fill(200, 128/n, random(100, 130));
    triangle(x1, y1, x2, y2, x3, y3);
    
    // Beräkna mittpunkten för alla segment.
    float h1 = (x1+x2)/2.0;
    float w1 = (y1+y2)/2.0;
    float h2 = (x2+x3)/2.0;
    float w2 = (y2+y3)/2.0;
    float h3 = (x3+x1)/2.0;
    float w3 = (y3+y1)/2.0;
    
    // Triangeln med de halvering av koordinaterna.
    triangleSier(x1, y1, h1, w1, h3, w3, n-1);
    triangleSier(h1, w1, x2, y2, h2, w2, n-1);
    triangleSier(h3, w3, h2, w2, x3, y3, n-1);
    noStroke();
    
  }
}
