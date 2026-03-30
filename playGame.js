/*******************************************************/
// P5.play: playGame
// start the game
/// Written by yuvi
/*******************************************************/
// load the display image for the horse
function preload() {

	imgHorsi = loadImage('../Images/horsi g.png');
	imgBG = loadImage('../Images/background.jpg');
}

let score = 0
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
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
	// create a new group for pipes
	makePipes();

}
/*******************************************************/
// pipes()
/*******************************************************/
function makePipes() {

	// if the remainder is 0, the spawn the pipes, if not then do nothing.
	if (frameCount % 180 != 0) {
		return;
	}
	pipes = new Group();

	let gap = 150; // Distance between pipes
	let minHeight = 50;
	let maxHeight = height - gap - minHeight;
	let topHeight = random(minHeight, maxHeight);

	// Top Pipe
	pipeTop = new Sprite(width + 20, topHeight / 2, 50, topHeight, 'k');
	pipeTop.vel.x = -2; // Move the pipe towards the left
	pipes.add(pipeTop); // adds pipeTop to the group

	// Bottom Pipe
	pipeBottom = new Sprite(width + 20, height - (height - topHeight - gap) / 2, 50, height - topHeight - gap, 'k');
	pipeBottom.vel.x = -2;
	pipes.add(pipeBottom);// adds pipeBottom to the group
	pipes.gravityScale = 0;// pipes gravtity = 0 so they dont fall over

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
	
	// run the function
	makePipes();

	// horse controls
	if (kb.pressing('up')) {
		horse.speed = 2.5;
	};

	if (kb.pressing('up')) {
		horse.direction = -90;
	};

	if (kb.pressing('up')) {

		horse.speed = 2.5;
	};
	// when horse collides with pillars display text showing that the game is over
	if (horse.collides(pipes)) {
		world.timeScale = 0;
		text("you lost!, refresh tab to restart", windowWidth / 2 - 100, windowHeight / 6);
	};
if (horse.collides(pipes)) {
	console.log("ouch " );
}

}

/*******************************************************/
//  END OF APP
/*******************************************************/