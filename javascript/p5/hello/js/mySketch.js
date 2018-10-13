function setup() {           // **ändra** void setup() till function setup()
  createCanvas(640, 360);    // **ändra** size() till createCanvas()
  stroke(255);               // stroke() - *samma*
  noFill();                  // noFill() *samma*
}

function draw() {            // **ändra** void draw() till function draw()
  background(0);             // background() *samma*
  // **ändra** int i to var i  
  for (var i = 0; i < 200; i += 20) {    
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0)); 
    // bezier() *samma*
  }
}