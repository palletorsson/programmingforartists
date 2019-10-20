var x = 320;
var y = 240;
var rWidth = 0;
var rHeight = 0;

function setup() {
    createCanvas(640, 480); // som processing size, vad vi använder här är htmls canvaselement
    background(255); // samma princip som i processing
}

function draw() {
    //rect(mouseX, mouseY, rWidth, rHeight);
    if (rWidth > width) {
      rWidth = 0;
      rHeight = 0;
    }
  
    rect(x-(rWidth/2), y-(rHeight/2), rWidth, rHeight);

}

function mouseMoved() {
	rWidth++;
	rHeight++;

}

function mouseClicked() {
	rWidth = 10;
	rHeight = 10;
	fill(random(255),random(255),random(255));
}
