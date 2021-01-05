var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background,selectBalloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,score;
var arrowGroup,redBalloonGroup,greenBalloonGroup,pinkBalloonGroup, blueBalloonGroup;
var temp_arrow,temp_balloon;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  arrowGroup = new Group();
  redBalloonGroup= new Group();
  greenBalloonGroup = new Group();
  blueBalloonGroup = new Group();
  pinkBalloonGroup = new Group();
  
  score=0;
}

function draw() {
  
  
 
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (mouseWentDown("left")) {
   createArrow();
    arrow.y=bow.y;
    
  }
  
  selectBalloon = Math.round(random(1,4));
  
  if(World.frameCount%80==0){
    if(selectBalloon == 1)
      {
          spawnRedBalloon();
      }
    if(selectBalloon == 2)
      {
          spawnGreenBalloon();
      }
    if(selectBalloon == 3)
      {
          spawnPinkBalloon();
      }
    if(selectBalloon == 4)
      {
          spawnBlueBalloon();
      }
  }
  
  drawSprites();
  
  for(var i=0;i<arrowGroup.length;i++){
    temp_arrow = arrowGroup.get(i);
    for(var j=0;j<redBalloonGroup.length;j++){
      temp_balloon = redBalloonGroup.get(j);
      if(temp_arrow.isTouching(temp_balloon)){
          arrowGroup.remove(arrowGroup.get(i));
          redBalloonGroup.remove(redBalloonGroup.get(j));
          temp_arrow.destroy();
          temp_balloon.destroy();
          score=score+1;
      }
    }
  }
  
  for(var k=0;k<arrowGroup.length;k++){
    temp_arrow = arrowGroup.get(k);
    for(var l=0;l<pinkBalloonGroup.length;l++){
      temp_balloon = pinkBalloonGroup.get(l);
      if(temp_arrow.isTouching(temp_balloon)){
          arrowGroup.remove(arrowGroup.get(k));
          pinkBalloonGroup.remove(pinkBalloonGroup.get(l));
          temp_arrow.destroy();
          temp_balloon.destroy();
          score=score+1;
      }
    }
  }
  
  for(var m=0;m<arrowGroup.length;m++){
    temp_arrow = arrowGroup.get(m);
    for(var n=0;n<greenBalloonGroup.length;n++){
      temp_balloon = greenBalloonGroup.get(n);
      if(temp_arrow.isTouching(temp_balloon)){
          arrowGroup.remove(arrowGroup.get(m));
          greenBalloonGroup.remove(greenBalloonGroup.get(n));
          temp_arrow.destroy();
          temp_balloon.destroy();
          score=score+1;
      }
    }
  }
  
  for(var g=0;g<arrowGroup.length;g++){
    temp_arrow = arrowGroup.get(g);
    for(var h=0;h<blueBalloonGroup.length;h++){
      temp_balloon = blueBalloonGroup.get(h);
      if(temp_arrow.isTouching(temp_balloon)){
          arrowGroup.remove(arrowGroup.get(g));
          blueBalloonGroup.remove(blueBalloonGroup.get(h));
          temp_arrow.destroy();
          temp_balloon.destroy();
          score=score+1;
      }
    }
  }

 
  text("Score : "+ score ,450,10);
  textSize(20)
   text("mouse click to shoot arrows out of bow",100,60)
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 60 ;
  arrowGroup.add(arrow);
}

function spawnRedBalloon(){
  red_balloon = createSprite(0,Math.round(random(40,450)),10,20);
  red_balloon.addImage(red_balloonImage);
  red_balloon.velocityX = 3;
  red_balloon.scale = 0.1;
  red_balloon.lifetime =175;
  redBalloonGroup.add(red_balloon);
}

function spawnPinkBalloon(){
  pink_balloon = createSprite(0,Math.round(random(40,450)),10,20);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.velocityX = 3;
  pink_balloon.scale = 0.9;
  pink_balloon.lifetime = 175;
  pinkBalloonGroup.add(pink_balloon);
}

function spawnGreenBalloon(){
  green_balloon = createSprite(0,Math.round(random(40,450)),10,20);
  green_balloon.addImage(green_balloonImage);
  green_balloon.velocityX = 3;
  green_balloon.scale = 0.1;
  green_balloon.lifetime=175;
  greenBalloonGroup.add(green_balloon);
}

function spawnBlueBalloon(){
  blue_balloon = createSprite(0,Math.round(random(40,450)),10,20);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.velocityX = 3;
  blue_balloon.scale = 0.1;
  blue_balloon.lifetime = 175;
  blueBalloonGroup.add(blue_balloon);
}
