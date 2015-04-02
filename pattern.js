/**
 * @author Josh Gibbs uPaymeiFixit@gmail.com
 */
var ctx;
var c;

var maxSize = 1;
var minSize = 1;

var minSpeed = 1;
var maxSpeed = 1;

var quantity = 3;

var size = new Array;
var xdirection = new Array;
var ydirection = new Array;
var left = new Array;
var top = new Array;
var speed = new Array;
var color = new Array;

window.onload = function load() {
	c = document.getElementById("canvas");
	ctx = c.getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	for(var i = 0; i < quantity; i++) {
		xdirection[i] = Math.random() < 0.5 ? -1 : 1;
		ydirection[i] = Math.random() < 0.5 ? -1 : 1;
		speed[i] = Math.floor(Math.random() * maxSpeed + minSpeed);
		size[i] = Math.floor(Math.random() * maxSize + minSize);
		top[i] = Math.floor(Math.random() * (window.innerHeight));
		left[i] = Math.floor(Math.random() * (window.innerWidth));
		color[i] = '#' + (Math.random() * (0xFFFFFF + 1) << 0).toString(16);

	}
	timer = setInterval("draw()", 1);
}
function draw() {
	for(var n = 0; n < 100; n++) {
		for(var i = 0; i < quantity; i++) {
			ctx.fillStyle = color[i];
			ctx.beginPath();
			ctx.arc(left[i], top[i], size[i], 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();

			top[i] += speed[i] * ydirection[i];
			left[i] += speed[i] * xdirection[i];

			if(left[i] >= window.innerWidth) {
				xdirection[i] = -1;
			} else if(left[i] <= 0) {
				xdirection[i] = 1;
			}
			if(top[i] >= window.innerHeight) {
				ydirection[i] = -1;
			} else if(top[i] <= 0) {
				ydirection[i] = 1;
			}
		}
	}
}

window.onresize = function() {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}