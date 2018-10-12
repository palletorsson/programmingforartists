// A p5.gui 


var randomColor = 30;
var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the GUI
  sliderRange(0, 255, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('randomColor'); 
  // Only call draw when then gui is changed
  noLoop();
}

function draw() {
  background(0);
  fill(255, 255, randomColor);
  ellipse(400,100,100,100);
  fill(255, randomColor, 255);
  ellipse(600,100,100,100); 
  fill(randomColor, 255, 255);
  ellipse(800,100,100,100); 
  
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}