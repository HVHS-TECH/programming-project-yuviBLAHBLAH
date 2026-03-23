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
function deleteBall(_alien, _blecktangle) {

	// Delete the alien which was hit
	console.log("colliding: ");
	_alien.remove();

}
function setup() {

	//create a new group for the aliens and define the properties of the aliens

	alienGroup = new Group();
	frameRate(120)
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 4.5;

	wallTop = new Sprite(width / 2, height - height, width, 10, 'k');
	wallTop.color = 'white';

	wallBot = new Sprite(width / 2, height, width, 10, 'k');
	wallBot.color = 'white';
	horse = new Sprite(width / 2 - 25, height - 700, 50, 'd');

	horse.bounciness = 0.1;
		horse.speed = 0;

	horse.image = (imgHorsi);

	imgHorsi.resize(50, 50);

	pillarTop = new Sprite(width -100, height- 750, 100, 350,'k')
	pillarBot = new Sprite(width -100, height- 50, 100, 350,'k')
	pillarBot.moveTowards(horse, 0.001, 'k');
	pillarTop.moveTowards(horse, 0.001, 'k');

	for (i = 10; i < 20; i++) {

		let alien = new Sprite(windowWidth / 2, windowHeight / 4, 100, 100);

		alien.vel.x = 3;

		alien.vel.y = 4;

		alien.bounciness = 1;

		alien.friction = 0;

		alienGroup.add(alien);

		alienGroup.collides(horse, deleteBall);


	}

	spriteX= random(50,150);
spriteY=  random(50,150);  ;

cnv = new Canvas(width, height);


red = new Sprite(spriteX/2, spriteY/2, spriteX, spriteY);
red.color = 'red';

green = new Sprite( width-50, spriteY/2 , spriteX, spriteY);
green.color = 'green';

blue = new Sprite( width-50, height-50, spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite( spriteX/2, height-50,  spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite( width/2, height/2 ,  spriteX, spriteY);
purple.color = 'purple';


}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
		background(imgBG);
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