var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/

var createScene = function (engine) { 
// Skapa en scen
var scene = new BABYLON.Scene(engine); 

// lägg till en kamera till scenen och lägg till den till canvas-elementet
var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene); 
camera.attachControl(canvas, true); 

 camera.setPosition(new BABYLON.Vector3(0, 0, 20));

// Lägg till ljus till scenen
var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene); 
var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

// lägg till en kub till scenen och returnera hela scenen 
var myBox = BABYLON.MeshBuilder.CreateBox("myBox", {height: 5, width: 2, depth: 0.5}, scene);

// returnera scenen
return scene; 

}; // slut på createScene-funktionen


/******* End of the create scene function ******/    

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () { 
    scene.render();
    
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
    engine.resize();
});