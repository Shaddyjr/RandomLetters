var x, randLetter, score;

newLetter = function(){
	var LETTERS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	return random(LETTERS);
}

resetLetter = function(){
	x = 0;
	randLetter = newLetter();
}

setup = function(){
	createCanvas(400,400);
	randLetter = newLetter();
	x = 0;
	score = 0;
}

draw = function(){
	background(100);
	fill(0);
	textAlign(CENTER);
	textSize(40);

	if (x > width){
		resetLetter();
	}else{
		text(randLetter.toUpperCase(),x,height/2);
	}
	x+=5;
	drawScore();
}

keyTyped = function(){
	if (key == randLetter){
		resetLetter();
		score += 5;
	}
}

drawScore = function(){
	textSize(80);
	fill(200,100,50);
	text("Score: "+ score,width/2,100);
}