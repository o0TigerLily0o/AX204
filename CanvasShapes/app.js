//Loading my sprite
var pikachu = new Image();
pikachu.src = "pika.png";

//drawing sprite onto canvas
pikachu.onload = function() {
   ctx5.drawImage(pikachu, 50, 290, 100, 95)
}

//poke centre
var centre = new Image();
centre.src = "gym.png";

centre.onload = function() {
	ctx5.drawImage(centre, 500, 270, 200, 195)
}
var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");

// Telling canvas to prepare to draw
ctx.beginPath();


// Set color for our pen
ctx.strokeStyle = "blue";

// Move pen tip to a coordinate
ctx.moveTo(75,0);

// Move my pen again, but this time draw a line
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);

// Automaticlly line back to our starting point
ctx.closePath();

// Command to draw(Actually drawing)
ctx.stroke();

// Change the fill color
ctx.fillStyle = "red";

//Actually fill the shape with color
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.beginPath();
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "turquoise";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");

ctx3.beginPath();
// middle of circle x, middle of circle y, radius, 0, 2(pi)=6.28
ctx3.arc(150,150,100,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "magenta"
ctx3.fill();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");

ctx4.beginPath();
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.closePath();
ctx4.stroke();

ctx4.moveTo(150,0);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(300,0);
ctx4.closePath();
ctx4.stroke();

ctx4.fillStyle = "pink"
ctx4.fill();

var c5 = document.getElementById("scene");
var ctx5 = c5.getContext("2d");

//sky and land
ctx5.fillStyle="green";
ctx5.fillRect(0, 350, 800, 150);
ctx5.fillStyle = "#bfd7ff";
ctx5.fillRect(0, 0, 800, 350);

//sun
ctx5.beginPath();
ctx5.arc(100, 100, 50, 0, 6.28);
ctx5.closePath();
ctx5.fillStyle="orange";
ctx5.fill();

//path
ctx5.beginPath();
ctx5.moveTo(350,500);
ctx5.lineTo(450,500);
ctx5.lineTo(420,350);
ctx5.lineTo(380,350);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="grey";
ctx5.fill();

ctx5.beginPath();
ctx5.moveTo(400,500);
ctx5.lineTo(400,350);
ctx5.closePath();
ctx5.stroke();