/*******************************************************/
// P5.play: playGame
// start the game
/// Written by yuvi
/*******************************************************/
// load the display image for the horse
function preload() {

	imgHorsi = loadImage('../Images/horsi g.png');
	imgPipetop = loadImage('../Images/pipetop.png');
	imgPipebot = loadImage('../Images/pipebot.png');
	imgBG = loadImage('../Images/background.jpg');
}

let score = 0
/*******************************************************/
// setup()
/*******************************************************/
function setup() {

	// testing stuff here

	//set framerate as 120
	frameRate(120)
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	// set world gravity
	world.gravity.y = 4.5;
	// make borders
	wallTop = new Sprite(width / 2, height - height, width, 10, 'k');
	wallTop.color = 'white';

	wallBot = new Sprite(width / 2, height, width, 10, 'k');
	wallBot.color = 'white';
	// create horse
	horse = new Sprite(width / 2 - 25, height - 700, 50, 'd');
	// define horse properties
	horse.bounciness = 0.1;
	horse.speed = 0;
	horse.gravity = 10;
	horse.image = (imgHorsi);

	imgHorsi.resize(50, 50);

	anchor = new Sprite(windowWidth - 5000, 500)
	// make moving pillars towards left side of screen
	pillarTop = new Sprite(width + 100, height - 750, 100, 450, 'k')
	pillarBot = new Sprite(width + 100, height - 50, 100, 450, 'k')
	pillarBot.moveTowards(anchor, 0.001, 'k');
	pillarTop.moveTowards(anchor, 0.001, 'k');


}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	// draw background
	background(imgBG);
	// draw score
	textSize(32);
	fill(255);
	stroke(0);
	strokeWeight(4);
	text(score, windowWidth / 2 - 40, 150);
	//the score count
	score = frameCount / 120;
	score = Math.floor(score)
	console.log("score: " + score);
	// horse controls, if the keyboard presses up then set horse speed 2.5 towards -90 degrees
	if (kb.pressing('up')) {
		horse.speed = 2.5;
	};

	if (kb.pressing('up')) {
		horse.direction = -90;
	};

	if (kb.pressing('up')) {

		horse.speed = 2.5;
	};
	// if the horse collides with the pillars then set world time to 0
	if (horse.collides(pillarBot)) {
		world.timeScale = 0;
	}
	else {
		world.timeScale = 1;

	};
// when horse collides with pillars display text showing that the game is over
	if (horse.collides(pillarTop)) {
		world.timeScale = 0;
		text("you lost!, refresh tab to restart", windowWidth / 2 - 100, windowHeight / 6);
	};
	if (horse.collides(pillarBot)) {
		world.timeScale = 0;
		text("you lost!, refresh tab to restart", windowWidth / 2 - 100, windowHeight / 6);
	};



}

/*******************************************************/
//  END OF APP
/*******************************************************/