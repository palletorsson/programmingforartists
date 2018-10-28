
// skapa en scen, en kamera och en renderare
var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x00ff00, 0.1); 

var camera = new THREE.PerspectiveCamera(
	75, // fov 
	window.innerWidth / window.innerHeight, //aspect
	0.1, // near
	1000); // far

var renderer = new THREE.WebGLRenderer();

// scala bilden till window-size och lägg till allt till dom:en
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// skapa en kub och ett material till kub

var geometry = new THREE.BoxGeometry(3, 3, 3);

var material = new THREE.MeshBasicMaterial({
		color: 0xff00ff,
	});

var material = new THREE.MeshNormalMaterial();

// sammanfoga dessa i en mech som består av kuben och materialet
var cube = new THREE.Mesh(geometry, material);

// lägg till kuben till scenen
scene.add(cube);

var plane = getPlane(40); 
plane.rotation.x = Math.PI/2;
plane.position.y = -3; 
scene.add(plane);

// sätt kamerans position så vi kan se boxen
	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 10;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

// rotera kuben och rendera scenen 
var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
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
