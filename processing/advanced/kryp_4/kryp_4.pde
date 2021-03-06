

// DEKLARERA 
ArrayList allaKryp;

void setup() {
  size(640, 360);
  stroke(126);
  // INITIERA 
  allaKryp = new ArrayList();
}

void draw() {
  background(0); 
  for (int i = 0; i < allaKryp.size(); i++) {
    Kryp krypX = (Kryp) allaKryp.get(i);
    krypX.run(); 
  } 
}

void mouseReleased() {
  Kryp krypX = new Kryp(random(width), random(height), random(20, 40));
  allaKryp.add(krypX);  
}
