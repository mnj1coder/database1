var ball, ball1;
var position;
var database;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ball1 = createSprite(300,350,10,10);
    ball1.shapeColor = "blue";

    database.ref('ball/position').on("value",function (data){
        position = data.val();
        ball1.x=position.x;
        ball1.y=position.y;  
        });
}

function draw(){
    background("white");

  /*  if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    */

   if(keyDown(LEFT_ARROW)){
    writepos(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writepos(1,0);
}
else if(keyDown(UP_ARROW)){
    writepos(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writepos(0,+1);
}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
position = data.val();
ball1.x=position.x;
ball1.y=position.y;  
}

function writepos(x,y){
    database.ref('ball/position').set({
        x : position.x + x,
        y : position.y + y

    })
}