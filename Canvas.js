var mainCanvas = document.getElementById('canvas');
var mainContext = mainCanvas.getContext('2d');

function resizeCanvas(canvas) {
  var canvas = canvas || mainCanvas;
  var wid = window.innerWidth - 10;
  var heit = window.innerHeight - 16;
  canvas.width = wid;
  canvas.height = heit;
}

function clear(canvas, color) {
  var canvas = canvas || mainCanvas;
  context = canvas.getContext('2d');
  context.fillStyle = color || '#d0e7f9';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.closePath();
  context.fill();
}

function drawLine(x1, y1, x2, y2, color, context) {
  var context = context || mainContext;
  var color = color || "black";
  context.beginPath();
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.stroke();
}

function drawLabel(label, x, y, context) {
  var context = context || mainContext;
  context.fillStyle = "blue";
  context.font = "bold 20px Arial";
  context.fillText(label, x, y);
}

function drawImage(x, y, source, angle, context) {
  var context = context || mainContext;
  context.save();
  context.translate(x - radius, y - radius); 
  context.rotate(angle);
  var img = new Image();
  img.src = "images/" + source + ".png";
  context.drawImage(img, -radius, -radius); 
  context.restore();
}

function drawCircle(x, y, r, color, context) {
  var context = context || mainContext;
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}

function drawOpaqueRectangle(x1, y1, dx, dy, color, context) {
  var context = context || mainContext;
  context.beginPath();
  context.fillStyle = color;
  context.fillRect(x1, y1, dx, dy);
  context.fill();
}

function drawPixel(x, y, color, context) {
	var context = context || mainContext;
	var imgData = context.createImageData(1,1);
	imgData.data[0] = color[0];
	imgData.data[1] = color[1];
	imgData.data[2] = color[2];
	imgData.data[3] = color[3];
	context.putImageData(imgData, x, y);
}

function drawPixels(x, y, color, context) {
	var context = context || mainContext;
	var imgData = context.createImageData(1,1);
	imgData.data[0] = color[0];
	imgData.data[1] = color[1];
	imgData.data[2] = color[2];
	imgData.data[3] = color[3];
	context.putImageData(imgData, x, y);
}
