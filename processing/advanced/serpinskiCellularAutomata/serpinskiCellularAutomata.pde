
// bestäm skala och bredd
int cellwidth = 10;
int definedwidth = 1000; 
int numbercells = definedwidth/cellwidth; 
int[] cells = new int[numbercells];

// regel 90
int[] ruleset = {0, 1, 0, 1, 1, 0, 1, 0};

int generations = 0; 
String rulesettype = "sierpinski"; 
int looping = 1; 

void setup() {
  size(1000, 800);
  background(0);
  fill(255);
  frameRate(30);
  if (rulesettype == "sierpinski") {
    sierpinskibase();
  }
}

void draw() {
  display();         
  generate();
}

// generera nya regler
void mouseReleased() { 
  for (int i = 0; i < 8; i++) {
    ruleset[i] = int(random(2));
  }
}

// pausa om trycker på p
void keyPressed() {
  int k = keyCode;
  // starta och stopa
  if (k == 80) {
    if (looping == 1) {
      noLoop();
      looping = 0;
    } else {      
      loop();
      looping = 1;
    }
  }
  // spara bild. 
  if (k == 83) {
    int rand = (int)random(30000000); 
    save("cellular"+ rand +".jpg");
  }
}

// skapa den nya generationen
void generate() {

  //skapa en tom matris för de nya värdena
  int[] nextgen = new int[cells.length];
  // För varje plats bestämmer du det nya värdet genom att undersöka grannar 
  // bortse från kanter 
  for (int i = 1; i < cells.length-1; i++) {
    int left = cells[i-1];   // Left neighbor state
    int me = cells[i];       // Current state
    int right = cells[i+1];  // Right neighbor state
    nextgen[i] = rules(left, me, right); // Compute next generation state based on ruleset
  }
  // Den skapad generation blir den nya generationen
  cells = nextgen;
  generations++;
}


void display() {
  for (int i = 0; i < cells.length; i++) {
    
    if (cells[i] == 1) fill(0);
    else               fill(255);
    noStroke();
    rect(i*cellwidth, generations*cellwidth, cellwidth, cellwidth);
  }
  if (generations < height/cellwidth) {
  } else {
    generations=0;
  }
}

// Wolfram regler, rule 90 
int rules (int a, int b, int c) {
  if      (a == 1 && b == 1 && c == 1) return ruleset[0]; //0  1  0  1  1  0  1  0
  else if (a == 1 && b == 1 && c == 0) return ruleset[1]; //1 
  else if (a == 1 && b == 0 && c == 1) return ruleset[2]; //0 
  else if (a == 1 && b == 0 && c == 0) return ruleset[3]; //1 
  else if (a == 0 && b == 1 && c == 1) return ruleset[4]; //1 
  else if (a == 0 && b == 1 && c == 0) return ruleset[5]; //0 
  else if (a == 0 && b == 0 && c == 1) return ruleset[6]; //1 
  else if (a == 0 && b == 0 && c == 0) return ruleset[7]; //0 
  return 0;
}

// skapa en grunden för en sierpinski triangl
void sierpinskibase() {
  for (int i = 0; i < numbercells-1; i++) {
    cells[i] = 0;
  }
  cells[numbercells/2] = 1;
}
