// en gång
void setup() {
    size(600, 400); // måste stå först 
    background(0); // sätt bakgrunden till svart
}

// alltid
void draw() {
    // background(0);
    stroke(225,0,0);  // är linjens färg
    fill(255,255,255); // är innehållets färg, 
    ellipse(300, 200, 80, 80); 
    // ellipse() bygger på samma princip som rect()
}

// TESTA:
// mouseX, mouseY är två av processings inbyggda variabler 
// som håller reda på muspekarens position
// prova att byta ut värdena 100, 100 mot mouseX, mouseY
// --> ellipse(mouseX, mouseY, 80, 80);
// prova att skapa variabler för storleken på ellipsen 
// int sizeX = 60
// int sizeY = 60
// --> ellipse(mouseX, mouseY, sizeX, sizeY);
// eller 
//  --> ellipse(mouseX, mouseY, mouseX, mouseY);
