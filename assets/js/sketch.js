
var black;

var img;
var pointillize = 50;


function setup() {
	//background(250);
	createCanvas(320, 240);

	capture = createCapture(VIDEO);
 	capture.size(320, 240);
 	capture.hide();

 	black = color(0);
}

function draw() {
	background(250);

	img = image(capture, 0, 0, 320, 240);
	filter(BLUR, 3);
	
	for(var i=0; i<=75; i++) {
		// Pick a random point
		var x = int(random(320));
		var y = int(random(240));
		var loc = x + y*320;

		loadPixels();

		var c = get(x, y);
		
		var r = red(c);
		var g = green(c);
		var b = blue(c);

		noStroke();
		
		fill(r,g,b,100);

		ellipse(x,y,pointillize,pointillize);
	};
	

}


/*
function initPage(){

	// your functions go here


};
*/