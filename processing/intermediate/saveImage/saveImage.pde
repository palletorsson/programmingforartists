color cWhite = color(255);
color cBlack = color(0);

void setup() {
   size(500,500); 
}

void draw() {
    // Förbered pixlarna att bli förändrade
    loadPixels();  
    
    // Loopa igenom varje pixel
    for (int i = 0; i < pixels.length; i++) {  
        if (i % 13 == 0) {
            pixels[i] = cWhite;
        } else if (i % 23 == 0) {
            pixels[i] = cBlack;
        } 
    }
    
    // efter förändringen uppdatera pixlarna
    updatePixels(); 
save("blackandwhite.jpg");
 
     
    // loopen körs bara en gång
    noLoop(); 
}
