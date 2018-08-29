
int j = 0; 
 int i = 0; 
void setup() {  
  size(640, 360);
  background(0);
  frameRate(60); 
}

void draw() {
  j++;
  i++; 
 //int i = j;
   
    if ((i % 37) == 0) {
      stroke(255, 200, 200);
      line(j, 0, j, height); 

     
    } if ((i % 17) == 0) {
      stroke(255, 0, 0);
      line(j, 0, j, height); 
    
      
    } else if ((i % 13) == 0) {
      stroke(0, 100, 200); 
      line(j, 0, j, height); 
    } else {
    
    }
    
    
    
  if (j > width) {
    j = 0; 
  }
}
