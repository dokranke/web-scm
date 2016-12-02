/*
* Rendering core
*/

var camera;

function setup() {
  // Fullscreen Canvas
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  camera = createCamera();
  document.addEventListener('contextmenu', event => event.preventDefault());
}

window.onresize = refit;
function refit() {
  //resizeCanvas(window.innerWidth, window.innerHeight);
  noCanvas();
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function mouseWheel(event) {
  if (camera.scl-event.delta/10 > 0) {
    camera.scl -= event.delta/10;
  }
}

function draw() {
  update();

  background(0);
  ambientLight(255);

  drawCircuitBoard();
}

function update() {
  camera.mouseHandler();
  camera.keyHandler();
  camera.applyCamera();
}

function drawCircuitBoard() {
  ambientMaterial(204);
  box(scl*7.5,scl/8,scl*7.5);
  translate(0,-scl/16-scl/32-1,0);
  ambientMaterial(226);
  box(scl*7,scl/16,scl*7);
  translate(-scl*3.625,scl/32+1,-scl*3.625);
  sphere(scl/12);
  translate(scl*0.625,-scl/16-scl/2-1,scl*0.625);
}
