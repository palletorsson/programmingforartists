console.log($);

// skapa en scen, en kamera och en renderare
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
// scala bilden till window-size och lägg till allt till dom:en
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// skapa en kub och ett material till kub
var geometry = new THREE.BoxGeometry(3,3,3); // x, y ,z
var material = new THREE.MeshBasicMaterial({
	color: 0xFF0000,
//  wireframe : true,
})
var material2 = new THREE.MeshBasicMaterial({
	color: 0x00FF00,
  //wireframe : true,
})
var material3 = new THREE.MeshBasicMaterial({
	color: 0x0000FF,
//  wireframe : true,
})
// sammanfoga dessa i en mech som består av kuben och materialet
cube = new THREE.Mesh(geometry, material);
// lägg till kuben till scenen
scene.add(cube);

cube3 = new THREE.Mesh(geometry, material3);
// sammanfoga dessa i en mech som består av kuben och materialet
cube2 = new THREE.Mesh(geometry, material2);
// lägg till kuben till scenen
scene.add(cube2);
scene.add(cube3);
cube2.position.x = 0;
cube.position.x = .1;
cube3.position.x = -.1;
// sätt kamerans position
camera.position.z = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0));
// rotera kuben och rendera scenen
renderer.render(scene, camera);

var getdata = function () {

			$.getJSON( "http://172.18.12.68:8081", function( data ) {
				let newsize = (data.distvalue-945)/10;
				console.log(newsize);
				if (newsize > 0) {
					cube.scale.x = newsize;
				}

			});

}

var animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;

	getdata();


  renderer.render(scene, camera)
}
animate();
