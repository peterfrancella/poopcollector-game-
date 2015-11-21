
//GRASS FIELD HEIGHT/WIDTH
 
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
			canvas.width = 1200;
			canvas.height = 700;
			ctx.font = "40px Georgia";
			ctx.fillStyle = "rgb(0, 250, 189)"; 
		
	document.body.appendChild(canvas);
	
//GRASS FIELD
	var bgReady = false;
	var bgImage = new Image();
			bgImage.onload = function () {
			bgReady = true;
};
			bgImage.src = "images/grass.png";



