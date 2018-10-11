// skapa en scen, en kamera och en renderare
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

// scala bilden till window-size och lägg till allt till dom:en
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// skapa en kub och ett material till kub
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
// sammanfoga dessa i en mech som består av kuben och materialet
var cube = new THREE.Mesh(geometry, material);

// lägg till kuben till scenen
scene.add(cube);

// sätt kamerans position 
camera.position.z = 5;

// rotera kuben och rendera scenen 
var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
// starta animationen 
animate();