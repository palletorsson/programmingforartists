$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "./data/pulsar.csv",
        dataType: "text",
        success: function(data) {
        	
        	init(data); 

        }
     });
});
var params = {
				enable: true
			};

function init(data) {
// skapa en scen, en kamera och en renderare

	var scene = new THREE.Scene();
	//scene.fog = new THREE.FogExp2(0x00ff00, 3);

	var rowsLen = data.split(/\r\n|\n/);
    
    var colLen = rowsLen[0].split(","); 
    console.log(colLen); 
	data = data.split(","); 

	var camera = new THREE.PerspectiveCamera(
		300, // fov 
		window.innerWidth / window.innerHeight, //aspect
		0.25, // near
		1000); // far

	var renderer = new THREE.WebGLRenderer();
	var control;
	control = new function () {
	    this.rotSpeed = 0.005;
	    this.scale = 1;
	};
	// scala bilden till window-size och lägg till allt till dom:en
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	// skapa ett plan och ett material till kub
   
    // and a point light to represent the source of the light volume
   
	
				var directionalLight = new THREE.DirectionalLight( 0x009999, 0.5 );
				directionalLight.position.set( 1, 1, 1 ).normalize();
				scene.add( directionalLight );
				directionalLight.position.set( 0, -80, 0);
				var pointLight = new THREE.PointLight( 0x990099, 0.5 );
				scene.add( pointLight );
				pointLight.position.set( 50, -80, 50 );
				var pointLight1 = new THREE.PointLight( 0x990099, 0.5 );
				scene.add( pointLight1 );
				pointLight1.position.set( 50, -80, 150 );
					var pointLight2 = new THREE.PointLight( 0x990099, 0.5 );
				scene.add( pointLight2 );
				pointLight2.position.set( -50, -80, 400 );
	//var material = new THREE.MeshPhongMaterial( { color: 0x666666, emissive: 0xff0000, wireframe: true } );
    var textureLoader = new THREE.TextureLoader();
	var maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
	var texture1 = textureLoader.load( "data/cell-grid.jpg" );
	var material = new THREE.MeshPhongMaterial( {
								map: texture1,
								

								shininess: 300,
								
							} );
	var material = new THREE.MeshLambertMaterial( {  side: THREE.DoubleSide } );
	

	var geometry = new THREE.PlaneGeometry(400, 600, 298, 79);

	var plane = new THREE.Mesh(geometry, material);
	scene.add(plane);
	plane.name = 'plane-1';
	var thePlane = scene.getObjectByName('plane-1');
	// add objects to the scene
	var planeGeo = thePlane.geometry;
	planeGeo.vertices.forEach(function(vertex, index) {
		vertex.z = data[index]*-2;
	});

	plane.rotation.x = -Math.PI/2;
	

	plane.verticesNeedUpdate = true;
	var gui = new dat.GUI();
	gui.add( params, 'enable' );
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({
	    color: 0x00ff00
	});
	// sammanfoga dessa i en mech som består av kuben och materialet
	var cube = new THREE.Mesh(geometry, material);

	// lägg till kuben till scenen
	scene.add(cube);
	
	cube.position.y = -200;

    // sätt kamerans position så vi kan se boxen
	camera.position.x = 60;
	camera.position.y = -100;
	camera.position.z = 80;

	camera.lookAt(new THREE.Vector3(0, 1, 0));
	
	// loop funktioner 
	var rotateCamera = function () {
	     var x = camera.position.x;
	     var z = camera.position.z;
	     camera.position.x = x * Math.cos(control.rotSpeed) + z * Math.sin(control.rotSpeed);
	     camera.position.z = z * Math.cos(control.rotSpeed) - x * Math.sin(control.rotSpeed);
	     camera.lookAt(scene.position);
	}
	// rotera kuben och rendera scenen 
	var animate = function () {
	    requestAnimationFrame(animate);
		//rotateCamera();
	    renderer.render(scene, camera);

	};
	// starta animationen 
	animate();




}
