
// skapa en scen, en kamera och en renderare
var scene = new THREE.Scene();
// scene.fog = new THREE.FogExp2(0x00ff00, 0.1); 

var camera = new THREE.PerspectiveCamera(
	100, // fov 
	window.innerWidth / window.innerHeight, //aspect
	0.1, // near
	1000); // far

var renderer = new THREE.WebGLRenderer();

// scala bilden till window-size och lägg till allt till dom:en
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// skapa en kub och ett material till kub

var geometry = new THREE.BoxGeometry(3, 6, 1);

var material = new THREE.MeshBasicMaterial({
		color: 0xff00ff,
	});

var material = new THREE.MeshNormalMaterial();
var textureLoader = new THREE.TextureLoader();

ambientLight = new THREE.AmbientLight( 0xbbbbbb );
scene.add( ambientLight );

  var textureLoader = new THREE.TextureLoader();
  var bookCoverTexture = textureLoader.load( './data/cover.png' );
  var bookSpineTexture = textureLoader.load( './data/spine.png' );
  var bookBackTexture = textureLoader.load( './data/back.png' );
  var bookPagesTexture = textureLoader.load( './data/pages.png' );
  var bookPagesTopBottomTexture = textureLoader.load( './data/topbottom.png' );

  bookCoverTexture.minFilter
    = bookSpineTexture.minFilter
    = bookBackTexture.minFilter
    = bookPagesTexture.minFilter
    = bookPagesTopBottomTexture.minFilter
    = THREE.LinearFilter;

  var bookCover = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookCoverTexture } );
  var bookSpine = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookSpineTexture } );
  var bookBack = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookBackTexture } );
  var bookPages = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookPagesTexture } );
  var bookPagesTopBottom = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookPagesTopBottomTexture } );

  var materials = [
    bookPages,          // Right side
    bookSpine,          // Left side
    bookPagesTopBottom, // Top side
    bookPagesTopBottom, // Bottom side
    bookCover,          // Front side
    bookBack            // Back side
  ];

// sammanfoga dessa i en mech som består av kuben och materialet
var cube = new THREE.Mesh(geometry, materials);

// lägg till kuben till scenen
scene.add(cube);


// sätt kamerans position så vi kan se boxen
camera.position.z = 4;


// rotera kuben och rendera scenen 
var animate = function () {
    requestAnimationFrame(animate);
   // cube.rotation.x += 0.01;
 	cube.rotation.y += 0.01;
	//cube.rotation.z += 0.01;
    renderer.render(scene, camera);
};
// starta animationen 
animate();

