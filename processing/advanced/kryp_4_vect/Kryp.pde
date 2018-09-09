// vi börjar med att själva kryp-klassen som alltså är en abstraktion för alla vår kryp som vi sen skall skapa.  

class Kryp {

  // GLOBALA VARIABLER
  // vi börjar med ett par variabler för position, storlek, färg och id
  float x, y;
  PVector vect;
 PVector velocity;
  PVector acceleration;
  float theSize;
  color kColor; 
  int id;
  int kId;
  float gravityForce = 1; 
  float windForce = 0.5;
     float maxforce;    // Maximum steering force
  float maxspeed;    // Maximum speed


  // KONSTRUKTOR
  // klassen har en konstruktor som initierar varje kryp med aktuella variabler
  Kryp(float _x, float _y, float _theSize) {
    x = _x;
    y = _y;
    vect = new PVector(_x, _y);
    theSize = _theSize;
    kColor = color(random(255), random(255), random(255));
    maxspeed = 1;
    maxforce = 0.2;
        acceleration = new PVector(0, 0);
    velocity = new PVector(0, 0);
  
} 

  // FUNKTIONER 

  // samla alla funtioner i en run-funktion
  void run() {
    display();
    move();
    gravity(); 
    wind(); 
    edges();
       velocity.add(acceleration);
    // Limit speed
    velocity.limit(maxspeed);
     vect.add(velocity);
    // Reset accelertion to 0 each cycle
    acceleration.mult(0);
  }

  // så här visar vi upp krypet
  void display() {
    fill(kColor);    
    ellipse(vect.x, vect.y, theSize, theSize);
  }

  // krypet rör sig, uppdatera postionen x och y  
  void move() {
    vect.x += random(-4, 4);
    vect.y += random(-4, 4);
  }
  
  // graviations-funtion 
  void gravity() {
    gravityForce = mouseY/100-2; 
    vect.y += gravityForce;
  }
  
  // vind-funktion
   void wind() {
    windForce = mouseX/100-2; 
    vect.x += windForce;
  }
  
  
  // kant-funktion
  void edges() {
    if (vect.x > width-10) {
      vect.x = 0.5;
    }
    if (y > height-10) {
      vect.y = 1;
    }
    if (x < 10) {
      vect.x = width;
    }
     if (vect.y < 10) {
      vect.y = height;
    }
  }
  // Separation
  // Method checks for nearby vehicles and steers away
  void separate (ArrayList<Kryp> kryps) {
    float desiredseparation = theSize*4;
    PVector sum = new PVector();
    int count = 0;
    // For every boid in the system, check if it's too close
    for (Kryp other : kryps) {
      float d = PVector.dist(vect, other.vect);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        PVector diff = PVector.sub(vect, other.vect);
        diff.normalize();
        diff.div(d);        // Weight by distance
        sum.add(diff);
        count++;            // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      // Our desired vector is moving away maximum speed
      sum.setMag(maxspeed);
      // Implement Reynolds: Steering = Desired - Velocity
      PVector steer = PVector.sub(sum, velocity);
      steer.limit(maxforce);
      acceleration.add(steer);
   
    }
  }
}
