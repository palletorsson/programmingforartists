// vi börjar med att själva kryp-klassen som alltså är en abstraktion för alla vår kryp som vi sen skall skapa.  

class Kryp {

  // GLOBALA VARIABLER
  // vi börjar med ett par variabler för position, storlek, färg och id
  float x, y;
  float theSize;
  color kColor; 
  int id;
  int kId;
  float gravityForce = 1; 
  float windForce = 0.5;
  
  // KONSTRUKTOR
  // klassen har en konstruktor som initierar varje kryp med aktuella variabler
  Kryp(float _x, float _y, float _theSize) {
    x = _x;
    y = _y;
    theSize = _theSize;
    kColor = color(random(255), random(255), random(255));
  } 

  // FUNKTIONER 

  // samla alla funtioner i en run-funktion
  void run() {
    display();
    move();
    gravity(); 
    wind(); 
    edges();
    eat(allaKryp); 
  }

  // så här visar vi upp krypet
  void display() {
    fill(kColor);    
    ellipse(x, y, theSize, theSize);
  }

  // krypet rör sig, uppdatera postionen x och y  
  void move() {
    x += random(-4, 4);
    y += random(-4, 4);
  }
  
  // graviations-funtion 
  void gravity() {
    gravityForce = mouseY/100-2; 
    y += gravityForce;
  }
  
  // vind-funktion
   void wind() {
    windForce = mouseX/100-2; 
    x += windForce;
  }
  
  
  // kant-funktion
  void edges() {
    if (x > width) {
      x = 0.5;
    }
    if (y > height) {
      y = 1;
    }
    if (x < 0) {
      x = width;
    }
     if (y < 0) {
      y = height;
    }
  }
  
  // eat-funktion
  void eat(ArrayList<Kryp> kryps) {
     for (int i = kryps.size() - 1; i >= 0; i--) {
        Kryp kryp = kryps.get(i);
        for (int j = kryps.size() - 1; j >= 0; j--) {
          Kryp other = kryps.get(j);        
          float dx = other.x - kryp.x;
          float dy = other.y - kryp.y;
          float d = sqrt(sq(dx)+sq(dy)); // avstånd mellan krypen
          if (d < 30 && d != 0) {
            float tempOtherSize = random((other.theSize)); 
            float tempKrypSize = random((kryp.theSize)); 
            if (tempKrypSize > tempOtherSize) {
                kryp.theSize = kryp.theSize + 4; 
                kryp.kColor = color(random(255), random(255), random(255));
                kryps.remove(other); 
            } else {
                other.theSize = other.theSize + 4; 
                other.kColor = color(random(255), random(255), random(255));
                kryps.remove(kryp); 
            }
    
        }
       }
    }
  }
}
  
