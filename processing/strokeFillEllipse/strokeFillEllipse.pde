// setup() körs en gång när programmet börjar

void setup() {  
    // background(r,g,b); sätt färg på bakgrunden
    background(0,0,0);
    
    size(600,400);
}

// draw() körs om och om igen till progammet stoppas.

void draw() {
    // background(0,0,0);
    // stroke(r,g,b); är linjenlinjen
    stroke(225,0,0);
    
    // fill(r,g,b); är innehället, 
    fill(255,255,255);
    
    // ellipse(); bygger på samma princip som Rect(); 
    ellipse(100, 100, 80, 80);
}


// TESTA:
// mouseX, mouseY är två av processings inbyggda varibel 
// som håller reda på muspekarens position
// prova att byta ut värdena 100, 100 med mouseX, mouseY
// --> ellipse(mouseX, mouseY, 80, 80);