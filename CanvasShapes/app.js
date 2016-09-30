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