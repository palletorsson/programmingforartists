var mic;
var reDraw = 1; 

function setup() { 
    createCanvas(windowWidth,windowHeight); 
	mic = new p5.AudioIn(); // Använd mic:en
	mic.start();
} 

function draw() { 
    var vol = mic.getLevel();
    for (var i = 1; i < width;  i=i+100) {
    	for (var j = 1; j < height;  j=j+100) {	
	      	var h = map(vol, 0, 0.5, 40, 800);
	      	console.log(h);
	      	fill(h*2, h*2, h); 
	      	ellipse(i+40, j+40, h, h);    		
    	}
    }
    reDraw++;
    if (reDraw > 300) {
    	background(255); 
		reDraw = 0; 
    }
}