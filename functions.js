var scene = new THREE.Scene();
var mesh,material;

var camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth/window.innerHeight,
  0.1,
  800
);
camera.position.z = 30;
var color = new THREE.Color("#7833aa");

//#s divisible by 2
//changes shape of object
var geometry = new THREE.SphereGeometry(24,12,4);
//THREE.ImageUtils.crossOrigin = true;


//repeat.set changes repetition of image
var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = true;
textureLoader.load("https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg", function(texture) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(180,10);
  material = new THREE.MeshLambertMaterial({map:texture});
  mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
})

//Carinne added this line:
document.bgColor="#745a7e" 
//to change color of background



var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//BUILD AND PLACE CUBE

//var geometry = new THREE.BoxGeometry(20,20,20);
//var material = new THREE.MeshLambertMaterial({color:color.getHex()});

/*for(var i=0; i<geometry.vertices.length; i++) {
  geometry.vertices[i].x += -10 + Math.random()*20;
  geometry.vertices[i].y += -10 + Math.random()*20;
}*/

//var cube = new THREE.Mesh(geometry, material);
//cube.rotation.x = .45;
//cube.rotation.y = -.25;
//cube.position.x = -30;
//scene.add(cube);

//ADD LIGHTING
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(20,10,5);
scene.add(light);
light.position.set(-20,10,15);
scene.add(light);
var dLight = new THREE.DirectionalLight(0xFFFFFF);
dLight.position.set(0,1,0);
scene.add(dLight);
dLight.position.set(1,0,0);
scene.add(dLight);
dLight.position.set(10,0,10);
scene.add(dLight);

//larger .1 spins fast
//smaller .001 spins slow
// +/- changes direction of spin
var render = function() {
  requestAnimationFrame(render);
  mesh.rotation.x += -0.001;
  mesh.rotation.y += -0.001;
  renderer.render(scene,camera);  
};

render();

//*C: adds following but all commands are nonfunctioning
orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.enableZoom = true;

var axisHelper = new THREE.AxesHelper( 5 );
scene.add( axisHelper );

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

object.onclick = function(){HELLO};