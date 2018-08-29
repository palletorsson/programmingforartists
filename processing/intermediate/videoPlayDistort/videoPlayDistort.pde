import processing.video.*;

Movie movie;
// Storlek på varje cell i rutnätet, förhållandet mellan fönsterstorlek och videostorlek
int videoScale = 6; 
// Antal kolumner och rader i systemet
int cols, rows;

void setup() {
  size(1500, 1000);  
  background(0);  
  movie = new Movie(this, "input.mp4");
  movie.play(); 
  cols = width/videoScale;  
  rows = height/videoScale;
}

void movieEvent(Movie movie) {  
  movie.read();
}

void draw() {  
  movie.loadPixels();
  for (int d = 0; d < 3; d++) {   
    int rand = int(random(1000));
    for (int i = 0; i < cols; i++) {    
      for (int j = rand; j < rows; j++) {           
        int x = i*(videoScale);      
        int y = j*(videoScale);
        color c = movie.pixels[i + j*movie.width];
        fill(c, 100);      
        noStroke(); 
        if (y < mouseY-20 || y > mouseY+100 ) {
        } else {
          ellipse(x-50, y-50, videoScale*2, videoScale*2);
        }
      }
    }
  }
}
