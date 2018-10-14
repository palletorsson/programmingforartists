
var locationData;


function setup() {

	if(geoCheck() == true){
			 createCanvas(640, 480); 
    		 background(255); 
    		 textSize(16);
    		 locationData = getCurrentPosition();
	} else {
		//error getting geolocaion
	}
}
 


function draw() {
    background(255); 
    text(locationData.latitude, 100, 100);
    text(locationData.longitude, 400, 100);


}