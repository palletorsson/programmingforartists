import processing.video.*;

Movie movie;
// Storlek på varje cell i rutnätet, förhållandet mellan fönsterstorlek och videostorlek
int videoScale = 1; 
// Antal kolumner och rader i systemet
int cols, rows;
int threshold = 180; 
 color d = color(random(255), random(255), random(255), random(255));
 
void setup() {
  size(640, 360);  
  background(0);  
  movie = new Movie(this, "input.mp4");
  movie.play(); 
  cols = width;  
  rows = height;
  textSize(12); 
  noStroke();
   
}

void movieEvent(Movie movie) {  
  movie.read();
}

void draw() {  
  threshold = mouseX;
  image(movie, 0, 0);
  movie.loadPixels();
  for (int i = 0; i < width; i=i+4) { 
 
    if (i % 12 == 0) {
      d = color(random(255), random(255), random(255), random(100, 255));
    }
    for (int j = 0; j < height; j=j+4) {           
      int loc = i + j*width;
      color c = movie.pixels[loc];
      float g = green(c);
      float b = blue(c);
      float r = red(c);
      if (r < 100 && g > 100 && b < 100) {
        movie.pixels[loc] = d;
        fill(d);
        ellipse(i, j, 4, 4);
        text("X", i-2, j-1);
      } else {
        movie.pixels[loc] = c;
      }
    }
  }
  movie.updatePixels();
}
