int numKryp = 30;


Kryp[] allKryp = new Kryp[numKryp];

void setup() {
  size(640, 360);
  for (int i = 0; i < numKryp; i++) {
    allKryp[i] = new Kryp(random(width), random(height), random(20, 50), i);
  }
  stroke(126);
  
}

void draw() {
  // background(0);
  for (Kryp kryp : allKryp) {
    kryp.setColor(kryp.kId); 
    kryp.move();
    kryp.checkEdges(); 
    for (Kryp other : allKryp) {
     if(other.id != kryp.id) {
        kryp.checkCollision(other);
     }
      
    }
    kryp.display();  
  }
  
}

class Kryp {
  
  float x, y;
  PVector position; 
  float size;
  color kColor; 
  float vx = 0;
  float vy = 0;
  int id;
  int kId;
  

  Kryp(float xin, float yin, float din, int id) {
    x = xin;
    y = yin;
    size = din;
    kId = id; 
    kColor = color(random(80), random(80), random(80)); 
    position = new PVector(x, y);
  } 
  
  void move() {
    x += random(8) -4;
    y += random(8) -4;
    position = new PVector(x, y); 
  }
  
  void checkEdges() {
    if ( x > width-size*2 || x < size) {
    x *= -1;
    }
    if (y > height-size*2 || y < size) {
      y *= -1;
    }
  }
  
  void setColor (int id) {
   fill(allKryp[id].kColor);
  }
  
  void removeKryp(int id) {
   
    for(int p = id; p < allKryp.length-1; p++) {
      allKryp[p] = allKryp[p+1];
    } 
    shorten(allKryp); 
    
  } 
  
  void display() {
    ellipse(x, y, size, size);
  }
  

  
  void checkCollision(Kryp other) {
    position = new PVector(x, y);
    other.position = new PVector(other.x, other.y);
    // Get distances between the balls components
    PVector distanceVect = PVector.sub(other.position, position);

    // Calculate magnitude of the vector separating the balls
    float distanceVectMag = distanceVect.mag();

    // Minimum distance before they are touching
    float minDistance = size + other.size;
    println(distanceVectMag); 
      if (distanceVectMag < minDistance) {
      if(size < other.size) {
        size = size - 1; 
        println("close"); 
        other.size = other.size + 1; 
        if (size < 15) {
           
           removeKryp(id); 
        }
      }
      
    }
  }
}
