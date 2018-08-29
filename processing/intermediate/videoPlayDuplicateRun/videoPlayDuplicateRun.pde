import processing.video.*;

Movie movie;

// Storlek på varje cell i rutnätet, förhållandet mellan fönsterstorlek och videostorlek
int videoScale = 10; 

int cols, rows;
int i = 0;
int j = 0;

void setup() {
  size(1600, 1000);  
  background(0);  
  movie = new Movie(this, "input.mp4");
  movie.play(); 
  cols = 240;  
  rows = 320;
}

void draw() {  
  i++; 
  if (i > 5) {
    i = 0; 
    j++; 
    if (j > 5) {
      j = 0;
    }
  }
   image(movie, i*320, j*240);
}

void movieEvent(Movie movie) {  
  movie.read();
}
