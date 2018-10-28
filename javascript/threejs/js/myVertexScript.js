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
	scene.fog = new THREE.FogExp2(0x00ff00, 3);

	var rowsLen = data.split(/\r\n|\n/);

	data = data.split(","); 

	var camera = new THREE.PerspectiveCamera(
		300, // fov 
		window.innerWidth / window.innerHeight, //aspect
		0.25, // near
		500); // far

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
scene.add( new THREE.AmbientLight( 0xff0000 ) );
			
	
	 var material = new THREE.MeshPhongMaterial( { color: 0x666666, emissive: 0xff0000 } );

	var geometry = new THREE.PlaneGeometry(200, 80, 300, 80);
	material.side = THREE.DoubleSide;
	

	// add objects to the scene

	var geometry = new THREE.Geometry();

    // var plane = scene.getObjectByName('plane-1');
	// var planeGeo = plane.geometry;
	var ind; 
	for (var i = 10; i < rowsLen.length; i++) {
		var col = rowsLen[i].split(","); 
		var cl = col.length;
		console.log(cl);
		for (var j = 0; j < cl; j++) {
			geometry.vertices.push(new THREE.Vector3(i*0.1,  j*0.1, col[j]))
		};
	}
	geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

geometry.computeBoundingSphere();
	var plane = new THREE.Mesh(geometry, material);
	console.log(plane); 
	plane.name = 'plane-1';
	scene.add(plane);
		// manipulate objects
	plane.rotation.x = -Math.PI/2;

	plane.rotation.z = Math.PI/4;
	console.log(ind); 
	plane.verticesNeedUpdate = true;
	var gui = new dat.GUI();
	gui.add( params, 'enable' );
	
	
	

    // sätt kamerans position så vi kan se boxen
	camera.position.x = 60;
	camera.position.y = 40;
	camera.position.z = 80;

	camera.lookAt(new THREE.Vector3(0, 1, 0));
	var spotLight = new THREE.SpotLight( 0xffffff );
	spotLight.position.set( 100, 1000, 100 );

	spotLight.castShadow = true;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;

	scene.background = new THREE.Color( 0x0000ff );

	scene.add( spotLight );
var hlight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( hlight );
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


	function getPlane(size) {
		var geometry = new THREE.PlaneGeometry(size, size);
		var material = new THREE.MeshBasicMaterial({
			color: 0xffff00,
			side: THREE.DoubleSide
		});
		var mesh = new THREE.Mesh(
			geometry,
			material 
		);


		return mesh;
	}

	function saved() {
		var plane = scene.getObjectByName('plane-1');
		var planeGeo = plane.geometry;
		var d = new Date();
		var now = d.getTime();
	    if (now % 16 == 0) {
			planeGeo.vertices.forEach(function(vertex, index) {
				vertex.z = Math.random()*5;
			});
		}

		planeGeo.verticesNeedUpdate = true;
	}



}
