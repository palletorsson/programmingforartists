	var effectSobel;
	var composer; 

var init = function () {

	// skapa en scen, en kamera och en renderare
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();

	// scala bilden till window-size och lägg till allt till dom:en
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// skapa en kub och ett material till kub
	var geometry = new THREE.BoxBufferGeometry( 3, 3, 3, 2, 2, 2);
	var material = new THREE.MeshNormalMaterial({
	    color: 0x00ff00
	});
	var geometry2 = new THREE.TorusKnotBufferGeometry( 8, 3, 256, 32, 2, 3 );
	// sammanfoga dessa i en mech som består av kuben och materialet
	var cube = new THREE.Mesh(geometry, material);
	var torusKnot = new THREE.Mesh(geometry2, material);

	// lägg till kuben till scenen
	scene.add(cube);
	scene.add(torusKnot);

	var movement = 0.01

	// sätt kamerans position 
	camera.position.z = 5;
	camera.position.y = 2;
    // rotera kuben och rendera scenen 
	var animate = function () {
	    requestAnimationFrame(animate);
	    cube.rotation.x += 0.001;
	    cube.rotation.y += 0.001;
	    torusKnot.rotation.x -= 0.001;
	    torusKnot.rotation.y -= 0.001;
	    camera.lookAt(scene.position);
	    composer.render();
	    camera.position.y += movement; 
	    if (camera.position.y < 1 || camera.position.y > 10) {
	    	movement = movement*-1;
	    }  
	};
  
	// adding sobel postprocessing
	composer = new THREE.EffectComposer( renderer );
	var renderPass = new THREE.RenderPass( scene, camera );
	composer.addPass( renderPass );

	// color to grayscale conversion
	var effectGrayScale = new THREE.ShaderPass( THREE.LuminosityShader );
	composer.addPass( effectGrayScale );

	effectSobel = new THREE.ShaderPass( THREE.SobelOperatorShader );
	effectSobel.renderToScreen = true;
	effectSobel.uniforms.resolution.value.x = window.innerWidth;
	effectSobel.uniforms.resolution.value.y = window.innerHeight;
	composer.addPass( effectSobel );

	// animate 
	animate();
	
}


// starta scriptet
var started = init(); 
