// vi börjar med att själva kryp-klassen som alltså är en abstraktion för alla vår kryp som vi sen skall skapa.  
 
class Kryp {
  
  // GLOBALA VARIABLER
  // vi börjar med ett par variabler för position, storlek, färg och id
  float x, y;
  float theSize;
  color kColor; 
  int id;
  int kId;

  // KONSTRUKTOR
  // klassen har en konstruktor som initierar varje kryp med aktuella variabler
  Kryp(float _x, float _y, float _theSize) {
    x = _x;
    y = _y;
    theSize = _theSize;
    kColor = color(random(255), random(255), random(255)); 
  } 
  
  // FUNKTIONER 
  // så här visar vi upp krypet
  void display() {
    fill(kColor);  
    
    ellipse(x, y, theSize, theSize);
  }

  // krypet rör sig   
  void move() {
    x += random(8) -4;
    y += random(8) -4;
  }
}
