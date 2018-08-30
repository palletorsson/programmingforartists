// DEKLARERA 
Kryp Kryp1; 
Kryp Kryp2;
Kryp Kryp3;

void setup() {
  size(640, 360);
  stroke(126);
  // INITIERA 
  // med aktuella variabler
  Kryp1 = new Kryp(random(width), random(height), random(2, 40));
  Kryp2 = new Kryp(random(width), random(height), random(2, 40));
  Kryp3 = new Kryp(random(width), random(height), random(2, 40));
}

void draw() {
  // ANVÄND FUKTIONALITET 
  // run
  background(255); 
  Kryp1.run(); 
  Kryp2.run();
  Kryp3.run(); 
}
