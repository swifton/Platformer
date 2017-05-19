var fps = 60;
if (gamePaused == undefined) var gamePaused = false;

function pauseGame() {
  gamePaused = !gamePaused;
  if (!gamePaused) GameLoop();
}

function GameLoop() {
  clear(mainCanvas);
  step();
  if (!gamePaused) setTimeout(GameLoop, 1000/fps);
}


if (realtime) {
	GameLoop();
}