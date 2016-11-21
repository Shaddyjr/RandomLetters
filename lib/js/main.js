var x, y;
setup = function(){
	createCanvas(400,400);
	//Sets dead center
	x=0; //Setting everything to the left
	y=height/2;
}

draw = function(){

	background(100);
	drawMinion();

	scale(.5);
	drawHappyface();

	//movement with keys
	if (keyIsDown(LEFT_ARROW)) {
		x-=5;
	}
	if (keyIsDown(RIGHT_ARROW)){
		x+=5;
	}
	if (keyIsDown(UP_ARROW)){
		y-=5;
	}
	if (keyIsDown(DOWN_ARROW)){
		y+=5;
	}


}

drawHappyface = function(){
	ellipseMode(CENTER);
	
	//face
	fill(200,200,0);
	ellipse(x,y,200);

	//eyes
	fill(0);
	ellipse(x+35,y-20, 25,50);
	ellipse(x-35,y-20, 25,50);

	//smile
	noFill();
	strokeWeight(5);
	arc(x,y,150,150,0, PI);
}


drawMinion = function(){
	//Settings
	ellipseMode(CENTER);
	strokeWeight(0);
	stroke(0);

	//Head
	fill(200,200,0);
	ellipse(x,y, 100);

	//body
	rectMode(CENTER);
	rect(x,y+50, 100, 100);

	//arm1
	strokeWeight(15);
	stroke(200,200,0);

	line(x+50, y+100, x+100, y+75);

	strokeWeight(0);
	stroke(0)

	//hand1
	fill(0);
	ellipse(x+100, y+75, 20, 25);

	//fingers1
	strokeWeight(10);
	stroke(0);

	line(x+100, y+75, x+110, y+50);
	line(x+100, y+75, x+125, y+60);
	line(x+100, y+75, x+130, y+70);

	strokeWeight(0);
	stroke(0);

	//pants
	fill(0,50,200);
	rect(x,y+100, 100, 40);

	//legs
	fill(0,50,200);
	rect(x+20,y+130, 20, 40);
	rect(x-20,y+130, 20, 40);

	//arm 2
	strokeWeight(15);
	stroke(200,200,0);
	line(x+15, y+100, x+65, y+75);

	strokeWeight(0);
	stroke(0)

	//hand2
	fill(0);
	ellipse(x+65, y+75, 20, 25);

	//fingers2
	strokeWeight(10);
	stroke(0);

	line(x+65, y+75, x+75, y+50);
	line(x+65, y+75, x+90, y+60);
	line(x+65, y+75, x+95, y+70);

	strokeWeight(0);
	stroke(0);

	//feet
	fill(10);
	strokeWeight(4);
	ellipse(x+25, y+150, 30,20);
	ellipse(x-25, y+150, 30,20);

	//eyes
	fill(225);
	strokeWeight(5);
	ellipse(x,y, 50);

	fill(0);
	stroke(200,100,0);
	strokeWeight(6);
	ellipse(x+7,y, 15);
	strokeWeight(0);
	stroke(0);

	fill(0);
	rect(x+37,y, 32, 10);
	rect(x-37,y, 32, 10);

	//mouth
	fill(0);
	strokeWeight(5);
	ellipse(x,y+55, 15);

	//hair
	fill(0);
	strokeWeight(2);
	line(x,y-45,x,y-60)

	line(x+10,y-45,x+10,y-60)
	line(x-10,y-45,x-10,y-60)

	line(x+20,y-45,x+20,y-60)
	line(x-20,y-45,x-20,y-60)
}



