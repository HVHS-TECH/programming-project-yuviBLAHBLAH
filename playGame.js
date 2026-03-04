/*******************************************************/
// P5.play: playGame
// start the game
/// Written by yuvi
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function preload() {

	imgBG = loadImage('../loadImage/space.jpg');

	imgFace = loadImage('../loadImage/face.png');

}
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	ball_1 = new Sprite(width / 2, height / 2, 50, 'd');

	ball_1.bounciness = 1;

	ball_1.friction = 0;

	ball_1.image = (imgFace);

	imgFace.resize(50, 50);


}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);
}

/*******************************************************/
//  END OF APP
/*******************************************************/