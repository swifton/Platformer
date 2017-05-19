function downKeyDown() {}
function upKeyDown() {}
function leftKeyDown() {}
function rightKeyDown() {}
function someKeyDown() {}
function spaceDown() {}
function escapeDown() {}
function WDown() {}
function ADown() {}
function SDown() {}
function DDown() {}
function QDown() {}
function EDown() {}

function downKeyUp() {}
function upKeyUp() {}
function leftKeyUp() {}
function rightKeyUp() {}
function someKeyUp() {}


function doKeyDown(e) {
  var i = e.keyCode;
  //console.log(i);
  someKeyDown();

  if (i == 37) leftKeyDown();
  if (i == 39) rightKeyDown();
  if (i == 38) upKeyDown();
  if (i == 40) downKeyDown();
  if (i == 32) spaceDown();
  if (i == 27) escapeDown();
  if (i == 87) WDown();
  if (i == 65) ADown();
  if (i == 83) SDown();
  if (i == 68) DDown();
  if (i == 81) QDown();
  if (i == 69) EDown();
}

function doKeyUp(e) {
  var i = e.keyCode;
  //console.log(i);
  someKeyUp();

  if (i == 37) leftKeyUp();
  if (i == 39) rightKeyUp();
  if (i == 38) upKeyUp();
  if (i == 40) downKeyUp();
}

function mouseClick(x, y) {}

function clickReporter(e) {
  var mousePos = getMousePos(mainCanvas, e);
  mouseClick(mousePos.x, mousePos.y);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

var mouse = {x: 0, y: 0};
function mouseMove() {}

mainCanvas.addEventListener('mousemove', function(e){mouse = getMousePos(mainCanvas, e); mouseMove()}, false);
mainCanvas.addEventListener('mousedown', clickReporter, false);
window.addEventListener("keydown", doKeyDown, true);
window.addEventListener("keyup", doKeyUp, true);
