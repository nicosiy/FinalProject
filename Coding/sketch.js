//Interactive Story Final Project for Creative Computing
//Nico Siy
//"Biscotti"

//variables:

var bakeryOutsideImg;
var bakeryInsideImg;
var counterImg;
var fireImg;
var happyMarioImg;
var marioBiscottiImg;
var phoneImg;
var sadMarioImg;
var cookieImg;

//preloading images:

function preload() {
	bakeryOutsideImg = loadImage("images/bakeryOutside.png");
	bakeryInsideImg = loadImage("images/bakeryinside.png");
	counterImg = loadImage("images/counter.png");
	fireImg = loadImage("images/fire.png");
	happyMarioImg = loadImage("images/happyMario.png");
	phoneImg = loadImage("images/phone.png");
	sadMarioImg = loadImage("images/sadMario.png");
	cookieImg = loadImage("images/cookie.png");


}

var currentScene = "scene1";

function setup() {
	createCanvas(1080, 810);
	noStroke();



}

function mousePressed() {

	if (currentScene === "scene1") {
		currentScene = "scene2";
	} else if (currentScene === "scene2") {
		currentScene = "scene3"
	} else if (currentScene === "scene3") {
		currentScene = "scene1"
	}
}

function draw() {
	if (currentScene === "scene1") {
		drawScene1();
	} else if (currentScene === "scene2") {
		drawScene2();
	} else if (currentScene === "scene3") {
		drawScene3();
	}
}

//SCENE ONE--------------------------
function drawScene1() {
	image(bakeryOutsideImg, 0, 0);

}


//SCENE TWO--------------------------
function drawScene2() {
	image(bakeryInsideImg, 0, 0);

	//left oven
	image(cookieImg, 500, 500);
	image(cookieImg, 550, 510);
	image(cookieImg, 450, 490);
	image(cookieImg, 410, 515);

	//right oven
	image(cookieImg, 850, 500);
	image(cookieImg, 900, 510);

}

//SCENE THREE-------------------------
function drawScene3() {
	background(200);
	ellipse(10, 10, 10, 10);

}


// function mouseReleased() {
// 	if (currentScene === "scene1") {
// 		currentScene = "scene2";
// 	} else {
// 		currentScene = "scene1";
// 	}
// }

// console.log(mouseX, mouseY);
