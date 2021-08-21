
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage
var FoodGroup, obstacleGroup
var score
var invisibleground;
var BANANAS= 1
var gameState
var PLAY;
var END;
var heart;
var survivaltime
var bg
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeystop = loadImage("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bg = loadImage("jungle image 3.jpg");
 
}



function setup() {
  
  createCanvas(600,400)
  
 invisibleground = createSprite(10,397,600,5);
  
monkey = createSprite(150,355,40,40);
  
  monkey.addAnimation("monkeyrunning", monkey_running);
  
  monkey.scale = 0.15;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
 background(bg)
 invisibleground.visible = false;
  
  if(gameState === PLAY)
  {
     survivaltime =Math.ceil(frameCount/frameRate());
    BANANAS <=1;
    monkey.visible = true;
    obstacleGroup.visible = true;
    FoodGroup.visible = true;
 
   
  
  if(FoodGroup.collide(monkey))
  {
    FoodGroup.destroyEach();
    monkey.scale = monkey.scale + 0.02
    BANANAS = BANANAS + 1 
  }
    
    
   monkey.velocityY = monkey.velocityY+2
    
 
    if(keyDown("space")&& monkey.y >=240)
 {
   monkey.velocityY = -17;

 }
  
    if(obstacleGroup.isTouching(monkey)){
      
    survivaltime = 0 
    BANANAS = 0
      
      monkey.scale = monkey.scale - 0.02
      obstacleGroup.destroyEach();
      
     obstacleGroup.setLifetimeEach(-1)
    
      FoodGroup.setVelocityXEach(0)
      FoodGroup.destroyEach();
     
      if(keyDown("space")){
      monkey.velocityY = 0;
      monkey.velocityX = 0;
    }
     
      
     
      
      
    
        
        
      }
     
      
    }
    
  
    
  
      
  
    
     monkey.collide(invisibleground)
    rocks()
  bananass()
  drawSprites();
  fill("yellow")
  textSize(20);
  text("banana's: "+ BANANAS,300,60)
  textSize(20);
  text("survival Time:"+survivaltime,300,20);

}
function rocks()
{
  if(frameCount%280 === 0)
  {
    
    obstacle = createSprite(600,385,30,30);
    obstacle.velocityX = -6;
    obstacle.lifetime = 140;
    obstacle.addImage("image",obstaceImage)
    obstacle.scale = 0.2;
 
    obstacleGroup.add(obstacle);
  }
}
  
function bananass()
  {
    if(frameCount%250=== 0){
      
      banana = createSprite(600,200,10,10);
      banana.velocityX = -3;
      banana.lifetime = 190;
      
      banana.addImage("banana",bananaImage);
      banana.scale = 0.1;
      
      FoodGroup.add(banana);
    
      
    }
    
    
    
  }
  
  
  
  

