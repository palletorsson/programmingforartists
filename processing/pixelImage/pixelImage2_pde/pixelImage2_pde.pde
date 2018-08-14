color cWhite = color(255);
color cBlack = color(0);
int x = 0; 
int y = 0;
void setup() {
   size(500,500); 
}

void draw() {
    // Förberd pixlarna att bli förändrade
    loadPixels();  
    
    // Loopa igenom varje pixel
    for (int i = 0; i < pixels.length; i++) {  
        if (i % 13 == 0) {
          fill(255,100);
            pixels[i] = cWhite;
        } else if (i % 23 == 0) {
          fill(0,100);
            pixels[i] = cBlack;
           
        } 
        x = floor(i/width); 
        y = i % width; 
        printLn(x,y); 
         ellipse(x,y,16, 16);
    }
    
    // efter förändringen uppdatera pixlarna
    updatePixels(); 

    // loopen körs bara en gång
    noLoop(); 
}
