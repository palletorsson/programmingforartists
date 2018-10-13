var radiusVal = 0;
var moveType = "plus"; 
var textString = ""; 
var r,g,b; 
function setup() { 
    createCanvas(640, 480); 
    background(255); 
    textSize(16); 
} 

function draw() { 
	ellipse(mouseX, mouseY, radiusVal, radiusVal);  
    displayText(mouseX, mouseY, radiusVal)
}

function mouseMoved() {

	radiusVal++; 

}

function mouseClicked() {
	r = random(255);
	g = random(255);
	b = random(255);
}


function displayText(_mouseX, _mouseY, _radiusVal) {
	fill(255,255,255);
	rect(170, 440, 360, 36); 

	var localText = "mouseX: " + _mouseX + " mouseY: "  + _mouseY + " Radius value: "  + _radiusVal; 
	console.log(localText); 
	fill(0,0,0);
	
	text(localText, 190, 450, 340, 18); 
	fill(r,g,b); 

} 