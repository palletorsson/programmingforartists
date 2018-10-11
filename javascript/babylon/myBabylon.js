// Shamefully inspired by Mr Doob's demo:http://www.mrdoob.com/lab/javascript/webgl/clouds/
var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    var start_time = Date.now();

    // Creating background layer using a dynamic texture with 2D canvas
    var background = new BABYLON.Layer("back0", null, scene);
    background.texture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    var textureContext = background.texture.getContext();
    var size = background.texture.getSize();

    textureContext.clearRect(0, 0, size.width, size.height);

    var gradient = textureContext.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, "#1e4877");
    gradient.addColorStop(0.5, "#45844");

    textureContext.fillStyle = gradient;
    textureContext.fillRect(0, 0, 512, 512);
    background.texture.update();

    var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, -128, 0), scene);
    camera.fov = 30;
    camera.minZ = 1;
    camera.maxZ = 3000;

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
    cloudMaterial.setTexture("textureSampler", new BABYLON.Texture("/textures/cloud.png", scene));
    cloudMaterial.setFloat("fogNear", -100);
    cloudMaterial.setFloat("fogFar", 3000);
    cloudMaterial.setColor3("fogColor", BABYLON.Color3.FromInts(69, 132, 180));

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
}
