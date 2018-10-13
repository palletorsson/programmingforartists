var radiusVal = 0;
var moveType = "plus"; 
var textString = ""; 

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
	if (moveType == "plus") { 
		radiusVal++; 
	} else {
		radiusVal--; 
	}
}

function mouseClicked() {
	// fill(random(255),random(255),random(255));
	if (moveType == "plus") {
    	moveType = "minus"
    } else {
        moveType = "plus"; 
    }
}


function displayText(_mouseX, _mouseY, _radiusVal) {
	rect(170, 440, 360, 36); 
	var localText = "mouseX: " + _mouseX + " mouseY: "  + _mouseY + " Radius value: "  + _radiusVal; 
	console.log(localText); 
	text(localText, 190, 450, 340, 18); 
} 