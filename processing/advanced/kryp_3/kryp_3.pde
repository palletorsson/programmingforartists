// hur många kryp
int numKryp = 10;

// DEKLARERA 
Kryp[] allaKryp = new Kryp[numKryp];

void setup() {
  size(640, 360);
  stroke(126);
  // INITIERA 
  // med aktuella variabler i en loop
  // allaKryp[0] = new Kryp(random(width), random(height), random(20, 40));
  for (int i = 0; i < allaKryp.length; i++) {
    allaKryp[i] = new Kryp(random(width), random(height), random(20, 40));
  }
  
}

void draw() {
  background(0);
  // ANVÄND FUKTIONALITET för varje kryp
  // allaKryp[0].run(); 
  for (int i = 0; i < allaKryp.length; i++) {
    allaKryp[i].run();  
  } 
}

// kolla in https://www.youtube.com/watch?v=UeBiKFEr4m0
// hur man bygger arrayLists för mer dynamik
