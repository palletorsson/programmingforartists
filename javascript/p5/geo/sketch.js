
var locationData;

function preload(){
    locationData = getCurrentPosition();
}

function setup() {
    console.log(locationData.latitude)
    console.log(locationData.longitude)
    console.log(locationData.accuracy)
    console.log(locationData.altitude)
    console.log(locationData.altitudeAccuracy)
    console.log(locationData.heading)
    console.log(locationData.speed)
}