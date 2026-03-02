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

	//make blocks idk i js got here
	for (var i = 0; i < 25; i++) {
		blockColor = color(random(255), random(255), random(255))
		for (var collumn = 0; collumn < 25; collumn++ ) {
			var block = new Sprite(collumn*80+ 40, i * 80,50, 50);
			block.color = spriteColor;
		}
	}

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("pink");
}

/*******************************************************/
//  END OF APP
/*******************************************************/