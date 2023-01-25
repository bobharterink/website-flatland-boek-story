import './style.css'

import * as THREE from 'three';
import { Color } from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer ({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);


const geometry1 = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );

const geometry2 = new THREE.BoxGeometry( 10, 0.01, 10 );
const material2 = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );

const geometry = new THREE.SphereGeometry( 15, 64, 32 );
const material = new THREE.MeshStandardMaterial( { color: 0xFFFF00 } );
const sphere = new THREE.Mesh( geometry, material );
sphere.position.set (-80,30,60);
scene.add( sphere );

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set (-60,60,40)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(pointLight, ambientLight)

//const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);


scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function moveCamera() {

  const t = document.querySelector("main").getBoundingClientRect().top;
  const x = document.querySelector("main").getBoundingClientRect().top;

  camera.position.y = t*-0.10;
  camera.position.x = x*-0.10;
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame( animate );

  controls.update();

  renderer.render(scene, camera );
}

animate()


