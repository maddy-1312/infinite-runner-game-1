var player;
var ground;
var invisibleGround;
var obstacle1;
var obstacle2;
var backgroundImg;
var jungle;
var player1;




function preload(){
obstacle1=loadImage("Images/Obstacle 1.png");
obstacle2=loadImage("Images/Obstacle 2.png");
obstacle3=loadImage("Images/Obstacle 3.png");
coin=loadImage("Images/coin.png");
backgroundImg=loadAnimation("Images/jungle.png","Images/jungle2.png");
player1=loadAnimation("Images/player1.png","Images/player2.png","Images/player3.png","Images/player4.png","Images/player5.png","Images/player6.png");
}

function setup(){
createCanvas(displayWidth,displayHeight);
ground=createSprite(width/2,height-75,width,10);
invisibleGround=createSprite(width/2,height-140,width,10);
invisibleGround.visible = false;
jungle=createSprite(displayWidth/2,displayHeight/2);
jungle.addAnimation("backgroundImg",backgroundImg);
jungle.scale = 6;
jungle.velocityX = -1
player=createSprite(75,height-220,10,10);
player.addAnimation("player1",player1);
player.scale = 0.3;
}

function draw(){
background(0);

if(keyDown("UP_ARROW")){
  player.velocityY= -10;
}
player.velocityY += 0.5;

player.collide(invisibleGround);

if(jungle.x < (displayWidth - 1000)){
  console.log(jungle.x);
  jungle.x = displayWidth/2;
}

goldCoins();

obstacles();

drawSprites();
}

function obstacles(){
  if(frameCount% 110 === 0){
    var obstacles=createSprite(width,height-220,15,15);
    obstacles.velocityX = -5;
    var c = Math.round(random(1,2));
    switch(c){
      case 1 : 
      obstacles.addImage(obstacle1);
      
      break;

      case 2 :
      obstacles.addImage(obstacle2);

      break;

      default:

      break;
    }

  }
}