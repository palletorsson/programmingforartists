// Minor modifaction to fit with explation. 
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

LSystem lsys;
Turtle turtle;

int mover = 2;
int translator = 0;
int translatorh = 1; 
int gens = 5;
int chooseruleset = 1; 

void setup() {
  size(800, 800);
  if (chooseruleset == 1) {
    // Create an empty ruleset
    Rule[] ruleset = new Rule[2];
    // Fill with two rules (These are rules for the Sierpinksi Gasket Triangle)
    ruleset[0] = new Rule('F', "F--F--F--G");
    ruleset[1] = new Rule('G', "GG");
    // Create LSystem with axiom and ruleset
    lsys = new LSystem("F--F--F", ruleset);
    turtle = new Turtle(lsys.getSentence(), width*2, TWO_PI/3);
    mover = 3; 
    gens = 7;
  } else if (chooseruleset == 2) {
    Rule[] ruleset = new Rule[1];
    ruleset[0] = new Rule('F', "FF+[+F-F-F]-[-F+F+F]");
    lsys = new LSystem("F", ruleset);
    turtle = new Turtle(lsys.getSentence(), height/3, radians(25));
    translator = 400;
  } else if (chooseruleset == 3) {
    Rule[] ruleset = new Rule[1];
    ruleset[0] = new Rule('F', "F-F+F+F-F");
    lsys = new LSystem("F", ruleset);
    turtle = new Turtle(lsys.getSentence(), height/3, radians(25));
    translator = 400;
    translatorh = 1;
  } else {
    
    Rule[] ruleset = new Rule[1];
    ruleset[0] = new Rule('F', "FGF");
    lsys = new LSystem("F", ruleset);
    turtle = new Turtle(lsys.getSentence(), height/3, radians(25));
    translator = 1;
    mover = 6;
    translatorh = 1;  
  }
}



void draw() {
  background(255);  
  stroke(random(255),random(255),random(255));
  translate(translator, height/translatorh);
  rotate(-PI/mover);
  turtle.render();
  noLoop();
}

int counter = 0;

void mousePressed() {
  if (counter < gens) {
    pushMatrix();
    lsys.generate();
    //println(lsys.getSentence());
    turtle.setToDo(lsys.getSentence());
    turtle.changeLen(0.5);
    popMatrix();
    redraw();
    counter++;
  }
}
