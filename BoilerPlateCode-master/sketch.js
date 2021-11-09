var carrot
var score=0
var bunny
var brick1
var brick2
var brick3
var brick4
var brick5
var brick6
var brick7
var brick8
var brick9
var snakegroup
var carrotImage
var bunnyImage
var backgroundImage
var snakeImage

function preload() {
  //load game assets
  carrotImage= loadImage("image/carrot.png")
  bunnyImage= loadImage("image/bunnyImng.png")
  backgroundImage= loadImage("image/bg.png")
  snakeImage= loadImage("image/snake.png")
 
}


function setup() {
  createCanvas(600,600);
  bunny=createSprite(50,550,15,15)
  carrot=createSprite(550,50,30,30)
  brick1 = createSprite(80,280,120,20)
  brick2 = createSprite(10,330,120,20);
  brick3 = createSprite(160,330,120,20);
  brick4 = createSprite(310,330,120,20);
  brick5 = createSprite(460,330,120,20);
  brick6 = createSprite(610,330,120,20);
  brick7 = createSprite(230,280,120,20);
  brick8 = createSprite(380,280,120,20);
  brick9 = createSprite(530,280,120,20);
  snakegroup=new Group()
  bunny.shapeColor="white";
  carrot.shapeColor="orange"
  brick1.shapeColor = "brown"
  brick2.shapeColor = "brown"
  brick3.shapeColor = "brown"
  brick4.shapeColor = "brown"
  brick5.shapeColor = "brown"
  brick6.shapeColor = "brown"
  brick7.shapeColor = "brown"
  brick8.shapeColor = "brown"
  brick9.shapeColor = "brown";
  

  background.addImage(backgroundImage)
  background.scale=2.5

 
  bunny.addImage(bunnyImage);
  bunny.scale=0.4;

  carrot.addImage(carrotImage)
  carrot.scale=0.4
  


}

function draw() {
  background("black");  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    text("YOU WIN",200,200);
  }
  if(bunny.isTouching(brick1)){
    bunny.x=40;
    bunny.y=550;
  }
  
  if(bunny.isTouching(brick2)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick5)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick6)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick7)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick8)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick9)){
    bunny.x=40;
    bunny.y=550;
  }
  
  generateSnakes()

  for(var i = 0 ; i< (snakegroup).length ;i++){
    var temp = (snakegroup).get(i) ;
    if (bunny.isTouching(temp)) {
      bunny.x=40;
      bunny.y=550;
      }   
    }

    

  drawSprites()

}

function generateSnakes (){
  if(frameCount % 30===0){
    var snake = createSprite(600,random(70,520),random(30,120),5);
    snake.shapeColor="yellow"
    snake.velocityX=-6;
   
    snakegroup.add(snake);
    
    }
}

