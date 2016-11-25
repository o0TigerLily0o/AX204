//Declare all variables at the top
var canvas;
var ctx;
//Starting position and radius of player sprite
var x = 200;
var y = 200;
var r = 20;
//Holding the speed in the x and y directions
var mx = 0;
var my = 0;
//Save position of fruit
var goodX;
var goodY;
var badX;
var badY;
var spriteWidth = 50;
var spriteHeight = 50;
//Boolean to keep track of whether collision is occuring
var goodCollision = false;
var badCollision = false;
//Width and height of our canvas
var WIDTH = 400;
var HEIGHT = 400;
var score = 0;

//Draw circle to denote player sprite
function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

//Wipe our whole canvas
function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//Import our images into canvas
function drawGood() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var good = new Image();
	good.src = "star.png";
	ctx.drawImage(good, goodX, goodY, 50 50);
}

function drawBad() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var bad = new Image();
	bad.src = "Bomb.png";
	ctx.drawImage(bad, badX, badY, 50 50);
}

//Initialise our animation 
function init() {
	//Put sprites in random position
	//Wait for a keyboard event, then call a function
	//Set the draw() to run every 10 ms
}

//Draw scene function
function draw(){
	//Call clear() to wipe canvas and draw circle & sprites
	//Tell the sprite to bounce off the walls 
	//Move our sprites 
	//Check fo collisions 
} 

//Checks for collisions (logic)
function collisionCheck(){

} 

//Handles what happens if there is a collision
function collisionHandle(){

}

//Function to check which key is being pressed
function keydownControl(e) {

}

//Calling the entry point function
init();
