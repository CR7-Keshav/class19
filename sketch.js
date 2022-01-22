var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(200,200)
  ghost.addImage(ghostImg)
  ghost.scale=0.3
}

function draw() {
  background("black");
  if (gameState==="play"){

  
  
    
    if (keyDown("left")){
      ghost.x=ghost.x-2
    }
    if(keyDown("right")){
      ghost.x=ghost.x+2
    }
    if(keyDown("space")){
      ghost.velocityY=-10
    }
    ghost.velocityY=ghost.velocityY+0.8
    if(tower.y > 400){
      tower.y = 300
    }
    if (ghost.y>600){
      gameState="end"
    }
    drawSprites()

    }
    else 
    if(gameState==="end"){
      textSize(30)
      fill ("yellow")
      text("GAMEOVER!!",230,250)
    }
}
