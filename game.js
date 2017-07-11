realtime = true;
resizeCanvas();

var pixels_in_meter = 180; 
var player_x = 5;
var player_y = 2;
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
var blockMeterWid = blockPixelWidth / pixels_in_meter;
var blockMeterHeit = blockPixelHeight / pixels_in_meter;
var screenWidth = window.innerWidth - 10;
var screenHeight = window.innerHeight - 16;

var floor = (canvas.height * (2 / 3)) / pixels_in_meter;

function step() {
	player_x += speed_of_player_x * dt;
	player_y += speed_of_player_y * dt;
	
	var collision = Collision();
	
	if (collision) {
		speed_of_player_y = 0;
		flying  = false;
		player_y = collision - size_of_player;
	}
	else {
		
	}
	
	speed_of_player_y += gravity_acceleration * dt;
	
	Draw();
}

function Draw() {
	//drawCircle(player_x * pixels_in_meter, player_y * pixels_in_meter, size_of_player * pixels_in_meter, "black");
	drawCircle(screenWidth/2, screenHeight/2, size_of_player * pixels_in_meter, "black");
	DrawMap();
}

function Collision() {	
	left_top_x = player_x - size_of_player;
	left_top_y = player_y - size_of_player;
	bottom_right_x = player_x + size_of_player;
	bottom_right_y = player_y + size_of_player;
	
	left_top_x_block = Math.floor(left_top_x / blockMeterWid);
	left_top_y_block = Math.floor(left_top_y / blockMeterHeit);
	bottom_right_x_block = Math.floor(bottom_right_x / blockMeterWid);
	bottom_right_y_block = Math.floor(bottom_right_y / blockMeterHeit);
	
	for (var i = left_top_x_block; i <= bottom_right_x_block; i++) {
		for (var j = left_top_y_block; j <= bottom_right_y_block; j++) {
			if (levelMap[i][j]) {return j * blockMeterHeit;}
		}
	}
	
	return false;
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
	var jMin = 0;
	var flag = 0;
	var RandomWidth = 0;
	for(var i = 0; i < levelWidth; i++)
	{
		levelMap[i] = new Array(levelHeight);

		if(flag < RandomWidth)
		{
			flag++;
		} 
		else
		{
			RandomWidth = randomInteger(2, 15);
			jMin = randomInteger(16, 22);
			flag = 0;
		}
		
		for(var j = 0; j < levelHeight; j++)
		{
			//|| (j == 19 && i > 20 && i < 30)
			if(j > jMin)
			{
				levelMap[i][j] = 1;
			}
			
			/*else if (j==21 && i == 45) {
				levelMap[i][j] = 1;
			}*/
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
				drawOpaqueRectangle(i * blockPixelWidth - (player_x * pixels_in_meter) + screenWidth/2,
				j * blockPixelHeight - (player_y * pixels_in_meter) + screenHeight/2, 
				blockPixelWidth - 1, blockPixelHeight - 1);
			}
		}
	}
}	












