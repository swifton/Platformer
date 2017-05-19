function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    loadProg(contents);
  };
  reader.readAsText(file);
}

function loadAssets() {
  for (i = 1; i < images.length; i++) {
    images[i] = new Image();
    images[i].src = "images/" + i.toString() + ".png";  
  }

  images[9].onload = function() {
    drawProg();
  }
}
