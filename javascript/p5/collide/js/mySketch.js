
var hit = false;
var hPos = 0; 
var wPos = 400; 
var speed = 3; 
var gear = 0; 
var points = 100; 
var down = 0; 
var level = 10; 
var state = 'playing';
var left = 300; 
var right = 700; 

function setup() {
	createCanvas(1000,1000);
	textSize(40); 
	stroke(0); 
}

function draw(){
	if (state == 'playing') {
		console.log(state); 
		rect(wPos,hPos,20,100);

		hit = collidePointRect(mouseX,mouseY,wPos,hPos,20,100); //see if the mouse is in the rect
		hPos = hPos+speed; 

		if(hit){ //change color!
			fill(wPos, wPos/3, hPos/3); 
			rect(wPos,hPos,20,100);
			textSize(14); 
			fill('black'); 
			text(points,wPos+3,hPos+60);
			textSize(40); 
			points=points+60;  
			wPos = random(left, right); 
			hPos = 1; 
			down++; 
		} else {
			fill('green')
			points--; 
		}

		fill('black') 
		rect(340, 380, 220, 100); 
		rect(30, 380, 220, 100); 
		fill('white')
		text(points, 360, 430); 
		text(down, 60, 430); 
		console.log(points); 
		fill('green')


		if (down > level) {	
			//speed++;
			level = level + 1; 
			if (left > 0) {
				left = left - 10;
				right = right + 10;  
			} else {
				speed++;
				left = left + 40;
				right = right - 40; 
			}
		}

		if (points < 0) {	
			fill('black')
			rect(340, 380, 220, 100); 
			fill('white') 
			text("gameover", 360, 430); 
			fill('green')
			fill('black')
			state = 'gameover'	
		}	
	
	} 
	if (state == 'gameover') {
			rect(640, 380, 220, 100); 
			fill('white') 
			text("replay", 650, 430); 
			fill('green')
			reset = collidePointRect(mouseX,mouseY,640, 380, 220, 100);
			if (reset) {
			background(255)

			points = 200; 
			state = 'playing'; 
			speed = 3; 
			level = 20; 
			down = 0;
			hPos = 0; 
			wPos = 400; 
			left 
		}
		
		}
	
		
}