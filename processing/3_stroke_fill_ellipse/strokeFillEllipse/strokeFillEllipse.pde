// setup() körs en gång när programmet börjar

// setup() körs en gång när programmet börjar
void setup() {
    size(600,400); // måste stå först 
    background(0,0,0); // background(r,g,b); sätt färg på bakgrunden  
}

// draw() körs om och om igen till programmet stoppas.
void draw() {
    // background(0,0,0);
    stroke(225,0,0);  // stroke(r,g,b); är linjens färg
    fill(255,255,255); // fill(r,g,b); är innehållets färg, 
    ellipse(300, 200, 80, 80); 
    // ellipse() bygger på samma princip som rect()
}

// TESTA:
// mouseX, mouseY är två av processings inbyggda variabler 
// som håller reda på muspekarens position
// prova att byta ut värdena 100, 100 mot mouseX, mouseY
// --> ellipse(mouseX, mouseY, 80, 80);
