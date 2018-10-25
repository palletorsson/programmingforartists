			var camera, scene, renderer, startTime, object, stats;
			init();
			animate();
			function init() {
				camera = new THREE.PerspectiveCamera( 36, window.innerWidth / window.innerHeight, 0.25, 16 );
				camera.position.set( -5, 1, 1 );

				scene = new THREE.Scene();
				// Lights
				scene.add( new THREE.AmbientLight( 0x505050 ) );
				var spotLight = new THREE.SpotLight( 0xffffff );
				spotLight.angle = Math.PI / 5;
				spotLight.penumbra = 0.2;
				spotLight.position.set( 2, 3, 3 );
				spotLight.castShadow = true;
				spotLight.shadow.camera.near = 3;
				spotLight.shadow.camera.far = 10;
				spotLight.shadow.mapSize.width = 1024;
				spotLight.shadow.mapSize.height = 1024;
				scene.add( spotLight );
				var dirLight = new THREE.DirectionalLight( 0x505050, 1 );
				dirLight.position.set( 0, 3, 0 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.near = 1;
				dirLight.shadow.camera.far = 10;
				dirLight.shadow.camera.right = 1;
				dirLight.shadow.camera.left = - 1;
				dirLight.shadow.camera.top	= 1;
				dirLight.shadow.camera.bottom = - 1;
				dirLight.shadow.mapSize.width = 1024;
				dirLight.shadow.mapSize.height = 1024;
				scene.add( dirLight );
				
				var material = new THREE.MeshBasicMaterial( {color: 0x505050, side: THREE.DoubleSide} );

				// ***** Clipping planes: *****
				var localPlane = new THREE.Plane( new THREE.Vector3( -1, 0, 0), 0.0, material );
				
				var globalPlane = new THREE.Plane( new THREE.Vector3( -1, -1, -1), 0.1 );
				// Geometry
				var material = new THREE.MeshPhongMaterial( {
						color: 0xffffff,
						shininess: 10000,
						side: THREE.DoubleSide,
						// ***** Clipping setup (material): *****
						clippingPlanes: [ localPlane ],
						clipShadows: true
					} );
				var geometry = new THREE.TorusKnotBufferGeometry( 0.4, 0.08, 95, 20 );
				object = new THREE.Mesh( geometry, material );
				object.castShadow = true;
				scene.add( object );
			
			
				// Renderer
				renderer = new THREE.WebGLRenderer();
				renderer.shadowMap.enabled = true;
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				window.addEventListener( 'resize', onWindowResize, false );
				document.body.appendChild( renderer.domElement );
				// ***** Clipping setup (renderer): *****
				var globalPlanes = [ globalPlane ],
					Empty = Object.freeze( [] );
				renderer.clippingPlanes = Empty; // GUI sets it to globalPlanes
				renderer.localClippingEnabled = true;
				renderer.globalClippingEnabled = true; 
				// Controls
				var controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 1, 0 );
				controls.update();
				
				startTime = Date.now();

			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				var currentTime = Date.now();
				var time = ( currentTime - startTime ) / 1000;
				requestAnimationFrame( animate );
				object.position.y = 0.8;
				object.rotation.x = time * 0.5;
				object.rotation.y = time * 0.2;
				object.scale.setScalar( Math.cos( time ) * 0.125 + 0.875 );
			
				renderer.render( scene, camera );
		
			}