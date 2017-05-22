realtime = true;
resizeCanvas();

player_x = 30;
player_y = 30;
size_of_player = 20;
speed_of_player = 5;

function step() {
	draw();
	//console.log("Hello");
}

function draw() {
	drawCircle(player_x, player_y, size_of_player, "black");
}

function downKeyDown() {
	player_y += speed_of_player;
}
function upKeyDown() {
	player_y -= speed_of_player;
}
function leftKeyDown() {
	player_x -= speed_of_player;
}
function rightKeyDown() {
	player_x += speed_of_player;
}