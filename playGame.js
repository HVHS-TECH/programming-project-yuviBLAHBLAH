/*******************************************************/
// P5.play: playGame
// start the game
/// Written by yuvi
/*******************************************************/
function preload() {

	imgBir = loadImage('../Images/birbirpatapim.png');
}
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;

	wallLH = new Sprite(width, height / 2, 20, height, 'k');
	wallLH.color = 'lime';

	wallRH = new Sprite(width, height / 2, 20, height, 'k');
	wallRH.color = 'lime';

	wallTop = new Sprite(width / 2, 0, width, 20, 'k');
	wallTop.color = 'lime';

	wallBot = new Sprite(width / 2, height, width, 20, 'k');
	wallBot.color = 'lime';
	horse = new Sprite(width / 2, height / 2, 50, 'd');

	horse.bounciness = 3;

	horse.drag = 1;

	horse.color = 'yellow'

	horse.image = (imgBir);

	imgBir.resize(50, 50);


}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	if (kb.pressing('up')) {

	horse.speed = 2;
	
	if (kb.pressing('up')) {
		horse.direction = -90;
	} else {
	  horse.speed = 0;
	}
}
	background("white")
}

/*******************************************************/
//  END OF APP
/*******************************************************/