/*******************************************************/
// P5.play: playGame
// start the game
/// Written by yuvi
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;

	wallLH = new Sprite(250, height / 2, 20, height, 'k');
	wallLH.color = 'lime';

	wallRH = new Sprite(1650, height / 2, 20, height, 'k');
	wallRH.color = 'lime';

	wallTop = new Sprite(width / 2, 0, width, 20, 'k');
	wallTop.color = 'lime';

	wallBot = new Sprite(width / 2, height, width, 20, 'k');
	wallBot.color = 'lime';
	horse = new Sprite(width / 2, height / 2, 50, 'd');

	horse.bounciness = 1;

	horse.drag = 1;

	horse.speed = 67;

	horse.color = 'yellow'

	if (kb.pressing('space') || mouse.pressing()) {
		horse.color = 'green';
	}
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("black")
}

/*******************************************************/
//  END OF APP
/*******************************************************/