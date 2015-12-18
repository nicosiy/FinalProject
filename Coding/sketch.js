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
var textSceneImg;
var textScene2Img;
var bakeryInsideBurntImg;
var cookieBurntImg;
var biscottiSceneImg;
var finImg;
var cloud1Img;
var cloud2Img;
var iLoveCookiesImg;

var cloud1X = -100;
var cloud2X = 600;

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
	textSceneImg = loadImage("images/textScene.png");
	textScene2Img = loadImage("images/textScene2.png");
	bakeryInsideBurntImg = loadImage("images/bakeryInsideBurnt.png");
	cookieBurntImg = loadImage("images/cookieBurnt.png");
	biscottiSceneImg = loadImage("images/biscottiScene.png");
	marioBiscottiImg = loadImage("images/marioBiscotti.png");
	finImg = loadImage("images/fin.png");
	cloud1Img = loadImage("images/cloud1.png");
	cloud2Img = loadImage("images/cloud2.png");
	iLoveCookiesImg = loadImage("images/iLoveCookies.png");

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
		currentScene = "scene4"
	} else if (currentScene === "scene4") {
		currentScene = "scene5"
	} else if (currentScene === "scene5") {
		currentScene = "scene6"
	} else if (currentScene === "scene6") {
		currentScene = "scene7"
	} else if (currentScene === "scene7") {
		currentScene = "scene8"
	} else if (currentScene === "scene8") {
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
	} else if (currentScene === "scene4") {
		drawScene4();
	} else if (currentScene === "scene5") {
		drawScene5();
	} else if (currentScene === "scene6") {
		drawScene6();
	} else if (currentScene === "scene7") {
		drawScene7();
	} else if (currentScene === "scene8") {
		drawScene8();
	}
}

//SCENE ONE-------------bakery outside-------------
function drawScene1() {
	image(bakeryOutsideImg, 0, 0);

	cloud1X += 0.5;
	if (cloud1X > 800) {
		cloud1X = -200;
	}
	image(cloud1Img, cloud1X, 50);

	cloud2X += 0.8;
	if (cloud2X > 800) {
		cloud2X = -200;
	}
	image(cloud2Img, cloud2X, 20);

}


//SCENE TWO--------------inside bakery------------
function drawScene2() {
	image(bakeryInsideImg, 0, 0);
	image(happyMarioImg, 60, 100);
	image(iLoveCookiesImg, 230, 50);

	//left oven
	image(cookieImg, 500, 500);
	image(cookieImg, 550, 510);
	image(cookieImg, 450, 490);
	image(cookieImg, 410, 515);

	//right oven
	image(cookieImg, 850, 500);
	image(cookieImg, 900, 510);
	image(cookieImg, 800, 520);

	// for (var i = 0; i < 10; i++) {
	// 	image(cookieImg(random(499, 501), random(499, 501)));


}

//SCENE THREE-----------mario answers phone, goes to aunt gloria---
function drawScene3() {
	image(textSceneImg, 0, 0);

}

//SCENE FOUR------------bakery on fire-------------
function drawScene4() {
	image(bakeryOutsideImg, 0, 0);
	image(fireImg, -50, -40);

	cloud1X += 0.5;
	if (cloud1X > 800) {
		cloud1X = -200;
	}
	image(cloud1Img, cloud1X, 50);

	cloud2X += 0.8;
	if (cloud2X > 800) {
		cloud2X = -200;
	}
	image(cloud2Img, cloud2X, 20);
}

//SCENE FIVE------------mario calls 911--------------
function drawScene5() {
	image(textScene2Img, 0, 0);
}

//SCENE SIX----------bakery burnt inside----------------
function drawScene6() {
	image(bakeryInsideBurntImg, 0, 0);
	image(sadMarioImg, 100, 150);

	//cookies
	image(cookieBurntImg, 500, 500);
	image(cookieBurntImg, 550, 510);
	image(cookieBurntImg, 450, 490);
	image(cookieBurntImg, 410, 515);

	image(cookieBurntImg, 850, 500);
	image(cookieBurntImg, 900, 510);
	image(cookieBurntImg, 800, 520);
}

//SCENE SEVEN----------"I will call this Biscotti"----------------
function drawScene7() {
	image(biscottiSceneImg, 0, 0);
	image(marioBiscottiImg, 500, 240);
}

//SCENE EIGHT----------Fin----------------
function drawScene8() {
	image(finImg, 0, 0);
}


// console.log(mouseX, mouseY);
