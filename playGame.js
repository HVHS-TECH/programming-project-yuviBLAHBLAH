/*******************************************************/
// P5.play: playGame
// start the game
/// Written by yuvi
/*******************************************************/
// load the display image for the horse
function preload() {

	imgHorsi = loadImage('../Images/horsi g.png');
}

let score = 0
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	frameRate(120)
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 4.5;

	wallTop = new Sprite(width / 2, 50, width, 10, 'k');
	wallTop.color = 'black';

	wallBot = new Sprite(width / 2, height - 50, width, 10, 'k');
	wallBot.color = 'black';
	horse = new Sprite(width / 2, height / 2, 50, 'd');

	horse.bounciness = 0.1;

	horse.image = (imgHorsi);

	imgHorsi.resize(75, 75);


}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white")
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text(score, windowWidth /2 - 40 , 150);
	//the score
	score = frameCount / 120;
	score = Math.floor(score)
	  console.log("score: " + score);
	if (kb.pressing('up')) {

		horse.speed = 2.5;

		if (kb.pressing('up')) {
			horse.direction = -90;
		} else {
			horse.speed = 0;
		}
	}


}

/*******************************************************/
//  END OF APP
/*******************************************************/