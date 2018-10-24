var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);
   var start_time = Date.now();
    // Add a camera to the scene and attach it to the canvas
    // Camera changed  from ArcRotateCamera to FreeCamera 
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
    camera.attachControl(canvas, true);


    // Creating background layer using a dynamic texture with 2D canvas
    var background = new BABYLON.Layer("back0", null, scene);
    background.texture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    var textureContext = background.texture.getContext();
    var size = background.texture.getSize();
 textureContext.clearRect(0, 0, size.width, size.height);

    var gradient = textureContext.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, "#1e4877");
    gradient.addColorStop(0.5, "#458444");

    textureContext.fillStyle = gradient;
    textureContext.fillRect(0, 0, 512, 512);
    background.texture.update();



    BABYLON.Effect.ShadersStore["cloudVertexShader"] = `

        #ifdef GL_ES
        precision highp float;
        #endif

        // Attributes
        attribute vec3 position;
        attribute vec2 uv;

        // Uniforms
        uniform mat4 worldViewProjection;

        // Normal
        varying vec2 vUV;

        void main(void) {
        gl_Position = worldViewProjection * vec4(position, 1.0);

        vUV = uv;
        }           
        `;

    BABYLON.Effect.ShadersStore["cloudFragmentShader"] = `
        #ifdef GL_ES
        precision highp float;
        #endif

        varying vec2 vUV;

        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;

        // Refs
        uniform sampler2D textureSampler;

        void main(void) {
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(fogNear, fogFar, depth);

        gl_FragColor = texture2D(textureSampler, vUV);
        gl_FragColor.w *= pow(abs(gl_FragCoord.z), 20.0);
        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);
        }    
    `
       var cloudMaterial = new BABYLON.ShaderMaterial("cloud", scene, {
        vertexElement: "cloud",
        fragmentElement: "cloud"
    },
    {
        needAlphaBlending: true,
        attributes: ["position", "uv"],
        uniforms: ["worldViewProjection"],
        samplers: ["textureSampler"]
    });
    cloudMaterial.setTexture("textureSampler", new BABYLON.Texture("./textures/cloud5.png", scene));
    cloudMaterial.setFloat("fogNear", -100);
    cloudMaterial.setFloat("fogFar", 3000);
    cloudMaterial.setColor3("fogColor", BABYLON.Color3.FromInts(69, 132, 180));

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    //var box = BABYLON.MeshBuilder.CreateBox("box", {diameter:2}, scene);
    //box.position.y  =  1;
   
    //var mySphereMaterial = new BABYLON.StandardMaterial("mySphereMaterial", scene);
    //mySphereMaterial.diffuseTexture = new BABYLON.Texture("./textures/normal.png", scene);
  
    //box.material = mySphereMaterial;

// Create merged planes
    size = 128;
    var count = 8000;

    var globalVertexData;

    for (var i = 0; i < count; i++) {
        var planeVertexData = BABYLON.VertexData.CreatePlane({ size: 128 });

        delete planeVertexData.normals; // We do not need normals

        // Transform
        var randomScaling = Math.random() * Math.random() * 1.5 + 0.5;
        var transformMatrix = BABYLON.Matrix.Scaling(randomScaling, randomScaling, 1.0);
        transformMatrix = transformMatrix.multiply(BABYLON.Matrix.RotationZ(Math.random() * Math.PI));
        transformMatrix = transformMatrix.multiply(BABYLON.Matrix.Translation(Math.random() * 1000 - 500, -Math.random() * Math.random() * 100, count - i));

        planeVertexData.transform(transformMatrix);

        // Merge
        if (!globalVertexData) {
            globalVertexData = planeVertexData;
        } else {
            globalVertexData.merge(planeVertexData);
        }
    }

    var clouds = new BABYLON.Mesh("Clouds", scene);
    globalVertexData.applyToMesh(clouds);

    clouds.material = cloudMaterial;

    var clouds2 = clouds.clone();
    clouds2.position.z = -500;

    scene.registerBeforeRender(function() {
        var cameraDepth = ((Date.now() - start_time) * 0.03) % 8000;

        camera.position.z = cameraDepth;
    });

    
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