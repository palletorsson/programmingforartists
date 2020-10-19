// skapa en scen, en camera och en renderare
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var control;

// scala bilden till window-size och lägg till allt till dom:en
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// skapa en kub och ett material till kub
var geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6);
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

// sammanfoga dessa i en mech som består av kuben och materialet
var cubelist = []

// https://threejs.org/docs/#api/en/core/Raycaster

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var materialParams = {
    envMap: 'HDR',
    roughness: 0.0,
    metalness: 0.0,
    exposure: 1.0
};

function onMouseMove( event ) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

var count = 10; 

// skapa en grid av kuber  
var createCubes = function () {
    for (var i = 0; i < count; i++) {
        var templist = []
        for (var j = 0; j < count; j++) {
            var newCube = createCube2(0x000000); 
            templist.push(newCube); 
        }
        cubelist.push(templist); 
    }
}

var createCube = function() {
    var color = new THREE.Color( 0xffffff );
    color.setHex( Math.random() * 0x010101);
    var material = new THREE.MeshStandardMaterial( {
            color: 0xffffff,
            metalness: materialParams.metalness,
            roughness: materialParams.roughness
    });
    var thecube = new THREE.Mesh(geometry, material); 
    return thecube;
}

var createCube2 = function(colorValue) {
    var color = new THREE.Color( colorValue );
    color.setHex( Math.random() * 0x010101);
    var material = new THREE.MeshStandardMaterial( {
            color: color,
            metalness: materialParams.metalness,
            roughness: materialParams.roughness
    });
    var thecube = new THREE.Mesh(geometry, material); 
    return thecube;
}

var addCubesToScene = function () {
  for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            scene.add(cubelist[i][j]); 
        }
    }

}

var setCubesPostion = function () {
  for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            cubelist[i][j].position.setX((i-5)* ); 
            cubelist[i][j].position.setZ((j-5)*2);  
        }
    }

}


THREE.ImageUtils.crossOrigin = '';
var imgTexture = THREE.ImageUtils.loadTexture('https://images.bonnier.cloud/files/his/production/2019/09/09070515/2353_06_04-nqu0cbmuadnzoacwf0w7ma.jpg');
imgTexture.anisotropy = renderer.getMaxAnisotropy();

var imgCubeMaterial = [
    new THREE.MeshBasicMaterial({
        map: imgTexture //left
    }),
    new THREE.MeshBasicMaterial({
        color: 'orange' //right
    }),
    new THREE.MeshBasicMaterial({
        color: 'green' // top
    }),
    new THREE.MeshBasicMaterial({
        color: 'blue' // bottom
    }),
    new THREE.MeshBasicMaterial({
        color: 'pink' // front
    }),
    new THREE.MeshBasicMaterial({
        color: 'yellow' //back
    })
];

// skapa, positonera och lägg till kuben till scenen
createCubes();
console.log(cubelist)
addCubesToScene(); 
setCubesPostion(); 


var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.background = new THREE.Color( 0xff00ff );

scene.add( spotLight );
// sätt Kamerans postion 
camera.position.z = 5;
camera.position.y = 19;
control = new function () {
    this.rotSpeed = 0.005;
    this.scale = 1;
};

// loop funktioner 
var rotateCamera = function () {
     var x = camera.position.x;
     var z = camera.position.z;
     camera.position.x = x * Math.cos(control.rotSpeed) + z * Math.sin(control.rotSpeed);
     camera.position.z = z * Math.cos(control.rotSpeed) - x * Math.sin(control.rotSpeed);
     camera.lookAt(scene.position);
}

var rotateCubes = function() {
  for (var i = 0; i < 10; i = i + 1) {
        for (var j = 0; j < 10; j = j + 2) {
            cubelist[i][j].rotation.x -= 0.05;
         
        }
    } 
}


var hex = 0xff0000; 
var animateScene = function () {
    requestAnimationFrame(animateScene); 
    //rotateCubes(); 
    rotateCamera();
    renderer.render( scene, camera );
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera( mouse, camera );

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects( scene.children );

    for ( var i = 0; i < intersects.length; i++ ) {
        var r = Math.abs(intersects[ i ].object.rotation.x *0.5 );
        console.log(r); 
     
        intersects[ i ].object.material = imgCubeMaterial; 
        intersects[ i ].object.material.color = new THREE.Color(0.1+r,0.9,0.8); 
        intersects[ i ].object.rotation.x -= 0.05;
        intersects[ i ].object.rotation.y -= 0.05;
        intersects[ i ].object.rotation.z -= 0.05;

    }

    
};
animateScene();
window.addEventListener( 'mousemove', onMouseMove, false );



