console.log("Working");

var a = document.getElementById("myCanvas1");
var atx = a.getContext("2d");

var b = document.getElementById("myCanvas2");
var btx = b.getContext("2d");

var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");

var d = document.getElementById("myCanvas4");
var dtx = d.getContext("2d");

var e = document.getElementById("myCanvas5");
var etx = e.getContext("2d");

// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// Canvas 1

atx.fillStyle = "rgb(64,64,64)";
atx.fillRect(100,100,100,100);
//first two = coordinates, last two= size
atx.strokeRect(60,60,180,180);
atx.clearRect(120,120,60,60);

//Canvas 2

var x = 0;
var y = 0;
var width = 300;
var height = 300;
btx.fillRect(x,y,width,height);
while (width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	btx.clearRect(x, y, width, height);
	x += 10;
	y += 10;
	width -= 20 ;
	height -= 20;
	btx.fillRect(x,y,width,height);
}

//Canvas 3

ctx.fillRect(0,0,300,300);
ctx.clearRect(20,20,120,120);
ctx.clearRect(20,160,120,120);
ctx.clearRect(160,160,120,120);
ctx.clearRect(160,20,120,120);

//Canvas 4

dtx.fillRect(150,0,150,150);
dtx.fillRect(0,150,150,150);

//Canvas 5

etx.fillRect(0,0,300,300);
etx.clearRect(0,0,50,50);
etx.clearRect(0,100,50,50);
etx.clearRect(0,200,50,50);
etx.clearRect(100,0,50,50);
etx.clearRect(100,100,50,50);
etx.clearRect(100,200,50,50);
etx.clearRect(200,0,50,50);
etx.clearRect(200,100,50,50);
etx.clearRect(200,200,50,50);

etx.clearRect(50,50,50,50);
etx.clearRect(50,150,50,50);
etx.clearRect(50,250,50,50);
etx.clearRect(150,50,50,50);
etx.clearRect(150,150,50,50);
etx.clearRect(150,250,50,50);
etx.clearRect(250,50,50,50);
etx.clearRect(250,150,50,50);
etx.clearRect(250,250,50,50);