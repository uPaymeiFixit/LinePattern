/**
 * @author Josh Gibbs uPaymeiFixit@gmail.com
 */
//maxSize = 1,
//minSize = 1,
//minSpeed = 1,
//maxSpeed = 1,
//quantity = 3,

size = [], xdirection = [], ydirection = [], left = [], top = [], speed = [], color = [];

onload = function() {
	ctx = document.getElementById("canvas").getContext("2d");
	ctx.canvas.width=innerWidth;
	ctx.canvas.height=innerHeight;
	for(var i = 0; i < 3; i++) {
		xdirection[i] = Math.random() < 0.5 ? -1 : 1;
		ydirection[i] = Math.random() < 0.5 ? -1 : 1;
		speed[i] = Math.floor(Math.random() + 2);
		size[i] = Math.floor(Math.random() + 2);
		top[i] = Math.floor(Math.random() * (innerHeight));
		left[i] = Math.floor(Math.random() * (innerWidth));
		color[i] = '#' + (Math.random() * (0xFFFFFF + 1) << 0).toString(16);

	}
	setInterval("d()", 1);
};
function d() {
	for(var n=0;n<100;n++) {
		for(var i=0;i<3;i++){
			ctx.fillStyle=color[i];
			ctx.beginPath();
			ctx.arc(left[i],top[i],size[i],0,6.28 * 2,true);
			ctx.closePath();
			ctx.fill();

			top[i] += speed[i] * ydirection[i];
			left[i] += speed[i] * xdirection[i];

			if(left[i] >= innerWidth) {
				xdirection[i] = -1;
			} else if(left[i] <= 0) {
				xdirection[i] = 1;
			}
			if(top[i] >= innerHeight) {
				ydirection[i] = -1;
			} else if(top[i] <= 0) {
				ydirection[i] = 1;
			}
		}
	}
}

onresize = function() {
	ctx.canvas.width = innerWidth;
	ctx.canvas.height = innerHeight;
}