realtime = true;
resize_canvas();

var pixels_in_meter = 180; 
var player_x = 25;
var player_y = 3.5;
var size_of_player = 0.1;
var max_speed_of_player = 3;
var speed_of_player_x = 0;
var speed_of_player_y = 0;
var dt = 1 / 60;
var gravity_acceleration = 10;
var flying = true;
var level_wid = 1000; //
var level_heit = 150;//
var level_map = new Array(level_wid);
var block_pixel_wid = 20;
var block_pixel_heit = 20;
var block_meter_wid = block_pixel_wid / pixels_in_meter;
var block_meter_heit = block_pixel_heit / pixels_in_meter;
var screen_wid = main_canvas.width;
var screen_heit = main_canvas.height;

function player_collides_with_map() {	
	var left_top = player_left_top_block()
	left_top_x_block = left_top[0];
	left_top_y_block = left_top[1];
	
	var bottom_right = player_bottom_right_block();
	bottom_right_x_block = bottom_right[0];
	bottom_right_y_block = bottom_right[1];
	
	for (var i = left_top_x_block; i <= bottom_right_x_block; i++) {
		for (var j = left_top_y_block; j <= bottom_right_y_block; j++) {
			if (level_map[i] == undefined) {
				
			}
			else if (level_map[i][j] == undefined) {
				
			}
			else if (level_map[i][j] != 0) {return j * block_meter_heit;}
		}
	}
	
	return false;
}

function step() {
	player_x += speed_of_player_x * dt;
	player_y += speed_of_player_y * dt;
	
	var collision = player_collides_with_map();
	
	if (collision) {
		speed_of_player_y = 0;
		flying  = false;
		player_y = collision - size_of_player;
	}
	else {
		
	}
	
	speed_of_player_y += gravity_acceleration * dt;
	
	clear_canvas(main_canvas, "#333333");
	draw();
}

function draw() {
	//drawCircle(player_x * pixels_in_meter, player_y * pixels_in_meter, size_of_player * pixels_in_meter, "black");
	draw_filled_circle(screen_wid/2, screen_heit/2, size_of_player * pixels_in_meter, "green");
	
	draw_map();
}

function player_left_top_block() {
	left_top_x = player_x - size_of_player;
	left_top_y = player_y - size_of_player;
	
	left_top_x_block = Math.floor(left_top_x / block_meter_wid);
	left_top_y_block = Math.floor(left_top_y / block_meter_heit);

	return [left_top_x_block, left_top_y_block];
}

function player_bottom_right_block() {
	bottom_right_x = player_x + size_of_player;
	bottom_right_y = player_y + size_of_player;
	
	bottom_right_x_block = Math.floor(bottom_right_x / block_meter_wid);
	bottom_right_y_block = Math.floor(bottom_right_y / block_meter_heit);
	
	return [bottom_right_x_block, bottom_right_y_block];
}

function up_key_down() {
	if (!flying) {
		speed_of_player_y -= max_speed_of_player;
		flying = true; 
	}
}

function left_key_down() {
	speed_of_player_x = - max_speed_of_player;
}

function left_key_up() {
	speed_of_player_x = 0;
}

function right_key_down() {
	speed_of_player_x = max_speed_of_player;
}

function right_key_up() {
	speed_of_player_x = 0;
}

function initialize_level()
{
	var j_min = 0;
	var flag = 0;
	var random_wid = 0;
	for(var i = 0; i < level_wid; i++)
	{
		level_map[i] = new Array(level_heit);

		if(flag < random_wid)
		{
			flag++;
		} 
		else
		{
			random_wid = random_integer(2, 15);
			j_min = random_integer(36, 42);
			flag = 0;
		}
		
		for(var j = 0; j < level_heit; j++)
		{
			if((j > j_min) && (i < 10 || i > 20))
			{
				level_map[i][j] = 1;
			}
			else
			{
				level_map[i][j] = 0;
			}
		}
	}	
}

initialize_level();

function draw_map()
{
	left_top = player_left_top_block();
	
	var context = main_context;
	context.beginPath();
	  
	for(var k = -50; k < 50; k++)
	{
		for(var m = -25; m < 25; m++)
		{
			var i = left_top[0] + k;
			var j = left_top[1] + m;
			
			if (level_map[i] == undefined) {
				draw_opaque_rectangle_optimized(i * block_pixel_wid - (player_x * pixels_in_meter) + screen_wid/2,
				j * block_pixel_heit - (player_y * pixels_in_meter) + screen_heit/2, 
				block_pixel_wid - 1, block_pixel_heit - 1, 'red');
			}
			else if (level_map[i][j] == undefined) {
				draw_opaque_rectangle_optimized(i * block_pixel_wid - (player_x * pixels_in_meter) + screen_wid/2,
				j * block_pixel_heit - (player_y * pixels_in_meter) + screen_heit/2, 
				block_pixel_wid - 1, block_pixel_heit - 1, 'red');
			}
			else if(level_map[i][j] != 0)
			{
				draw_opaque_rectangle_optimized(i * block_pixel_wid - (player_x * pixels_in_meter) + screen_wid/2,
				j * block_pixel_heit - (player_y * pixels_in_meter) + screen_heit/2, 
				block_pixel_wid - 1, block_pixel_heit - 1);
			}
		}
	}
	
	context.fill();
}	












