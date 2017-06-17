realtime = true;
resizeCanvas();

var pixels_in_meter = 180; 
var player_x = 5;
var player_y = 1;
var size_of_player = 0.1;
var max_speed_of_player = 3;
var speed_of_player_x = 0;
var speed_of_player_y = 0;
var dt = 1 / 60;
var gravity_acceleration = 10;
var flying = true;
var levelWidth = 100; //
var levelHeight = 100;//
var levelMap = new Array(levelWidth);
var blockPixelWidth = 20;
var blockPixelHeight = 20;


var floor = (canvas.height * (2 / 3)) / pixels_in_meter;

function step() {
	speed_of_player_y += gravity_acceleration * dt;
	player_x += speed_of_player_x * dt;
	player_y += speed_of_player_y * dt;
	Collision();
	Draw();

}

function Draw() {
	drawCircle(player_x * pixels_in_meter, player_y * pixels_in_meter, size_of_player * pixels_in_meter, "black");
	drawLine(0, floor * pixels_in_meter, canvas.width, floor * pixels_in_meter);
	DrawMap();
}

function Collision() {
	if (player_y > floor - size_of_player) {
		player_y = floor - size_of_player;
		speed_of_player_y = 0;
		flying = false;
	}
}

function upKeyDown() {
	if (!flying) {
		speed_of_player_y -= max_speed_of_player;
		flying = true; 
	}
}

function leftKeyDown() {
	speed_of_player_x = - max_speed_of_player;
}

function leftKeyUp() {
	speed_of_player_x = 0;
}

function rightKeyDown() {
	speed_of_player_x = max_speed_of_player;
}

function rightKeyUp() {
	speed_of_player_x = 0;
}

function downKeyDown() {}

function InitializeLevel()
{
	for(var i = 0; i < levelWidth; i++)
	{
		levelMap[i] = new Array(levelHeight);
		for(var j = 0; j < levelHeight; j++)
		{
			if(j == 22)
			{
				levelMap[i][j] = 1;
			} 
			else
			{
				levelMap[i][j] = 0;
			}
		}
	}	
}

InitializeLevel();
//console.log(levelMap);

function DrawMap()
{
	for(var i = 0; i < levelWidth; i++)
	{
		for(var j = 0; j < levelHeight; j++)
		{
			if(levelMap[i][j] != 0)
			{
				drawOpaqueRectangle(i * blockPixelWidth, j * blockPixelHeight, blockPixelWidth - 1, blockPixelHeight - 1);
			}
		}
	}
}	












