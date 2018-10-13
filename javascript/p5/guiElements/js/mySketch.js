////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 2                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use sliderRange(min, max, step)
// to adjust the range and step size for sliders

var bgColor = [0, 255, 0];

// seed opacity
var seedColor = '#ff00dd';
var opacity = 150;

// the gui object
var gui;

function setup() {

  // all angles in degrees (0 .. 360)
  angleMode(DEGREES);

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  ////////////////////////////////////////////////////////////////////////////////
  // This is where the magic happens ...

  // create the GUI
  gui = createGui('sliders');



  // set opacity range with magic variables
  sliderRange(0, 255, 1);
  gui.addGlobals('opacity', 'bgColor');

  ////////////////////////////////////////////////////////////////////////////////

  // only call draw when then gui is changed
  //noLoop();
   background(bgColor);
 
}


function draw() {


  var c = color(seedColor);
  fill(red(c), green(c), blue(c), opacity);
 
ellipse(mouseY, mouseX, 20,20); 

}

function mousePressed() {
     background(bgColor);
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}