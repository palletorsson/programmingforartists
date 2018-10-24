var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    // Camera changed  from ArcRotateCamera to FreeCamera 
    var camera = new BABYLON.FreeCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    sphere.position.x  =  -1.2;
    sphere.position.y  =  1;
    sphere.position.z  =  -1.3;
    var mySphereMaterial = new BABYLON.StandardMaterial("mySphereMaterial", scene);
    mySphereMaterial.diffuseTexture = new BABYLON.Texture("./textures/normal.png", scene);
  
    sphere.material = mySphereMaterial;

    var box = BABYLON.MeshBuilder.CreateBox("box", {}, scene); // default CreateBox
    box.position.y  =  2;
    box.scaling = new BABYLON.Vector3(2, 2, 2);
    var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    sphere2.scaling.y = 0.4;
    //var myPlane = BABYLON.MeshBuilder.CreatePlane("myPlane", {width: 5, height: 2}, scene);
    // var myGround = BABYLON.MeshBuilder.CreateGround("myGround", {width: 6, height: 4, subdivsions: 4}, scene);
     
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseTexture = new BABYLON.Texture("https://media.vam.ac.uk/media/thira/collection_images/2009BX/2009BX6147_jpg_l.jpg", scene);
    myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    myMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
    myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
    box.material = myMaterial;

    
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