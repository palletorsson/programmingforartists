var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
 var createScene = function (engine) {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", -2.5, 1.0, 200, new BABYLON.Vector3(0, 5, 0), scene);
    camera.attachControl(canvas, true);

    scene.createDefaultLight();

 	//Texture Example	
	// Ground
	var ground_T = BABYLON.Mesh.CreateGround("groundT", 100, 100, 200, scene, false);
	var sphere_T = BABYLON.Mesh.CreateSphere("sphereT", 200, 100, scene);
	ground_T.position = new BABYLON.Vector3(-20, 25, 0);
	sphere_T.position = new BABYLON.Vector3(20, 25, 0);
		
	// Fur;
	
	var furMaterial_T = new BABYLON.FurMaterial("furT", scene);
	furMaterial_T.highLevelFur = false;
	furMaterial_T.furLength = 10; // Represents the maximum length of the fur, which is then adjusted randomly. Default value is 1.
	furMaterial_T.furAngle = Math.PI/6; // Represents the angle the fur lies on the mesh from 0 to Math.PI/2. The default angle of 0 gives fur sticking straight up and PI/2 lies along the mesh.
	furMaterial_T.diffuseTexture = new BABYLON.Texture("https://upload.wikimedia.org/wikipedia/commons/8/8a/Leopard_fur.JPG", scene);

	ground_T.material = furMaterial_T;
	sphere_T.material = furMaterial_T;
    return scene;
};

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