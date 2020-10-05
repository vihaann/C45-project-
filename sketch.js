var PLAY = 1;
var END = 0;
var gameState = PLAY;



var castle,castleImg;
var backgroundI , backgroundIimg ; 
var boy;
var boyImg ; 
var  Coin , coinImg;
var GameOverImg,GameOver ; 





function preload(){
  boyImg = loadImage("images/Boy.png");
  backgroundIimg = loadImage("images/forest.png");
  castleImg = loadImage("images/Castle.png");
  coinImg = loadAnimation("images/Coin.gif");
  monsterImg = loadAnimation("images/Monster.gif");
  GameOverImg = loadAnimation("images/gameover.gif");
  
}


function setup() {
  createCanvas(1500,1500);
  
  backgroundI = createSprite(650,350,3500,10000);
  backgroundI.addImage("background1",backgroundIimg);
  backgroundI.scale = 2 ;
  backgroundI.x = backgroundIimg.width/2 ;
  backgroundI.velocityX = -4 ;
  
  
  boy = createSprite(50,500,40,60);
  boy.addAnimation("boy1",boyImg);
  boy.scale = 0.1;
 
  


  //var CoinsGroup = new Group();
  //var monstersGroup = new Group();

}

//var CoinsGroup = new Group();
//var monstersGroup = new Group();

function draw() {


  backgroundI.velocityX = -4 ;
  if(backgroundI.x < 0 ){
    backgroundI.x = backgroundIimg.width/2 ;
  
  }

  /*if(boy.isTouching()){
   GameOver = createSprite(500,500,60,10);
   GameOver.addAnimation("GameOver1",GameOverImg);

  }*/

  SpawnCoins();
  SpawnMonster();
  SpawnCastle();

  drawSprites();
  

}




    function SpawnCoins(){
            if (World.frameCount % 60 === 0) {
              Coin = createSprite(670,400,40,10);
              Coin.addAnimation("Coin",coinImg);
              Coin.scale = 0.2;
              Coin.velocityX = -3;
              
              Coin.lifetime = 1600;
              //CoinsGroup.add(Coin);

              
              
            }
            
          }

          
    function   SpawnMonster(){
        if (World.frameCount % 310 === 0) {
          var monster = createSprite(1400,550,40,10);
          monster.addAnimation("Monster",monsterImg);
         
          monster.velocityX = -3;
          
          monster.lifetime = 134;
         // monstersGroup.add(monster);

          
          
          
        }
        
      }

      function SpawnCastle(){
        if(World.frameCount === 45000){
        castle = createSprite(1200,500,70,80);
        castle.addImage("castle1",castleImg);
        castle.scale = 0.5 ; 
      }
    }
          
    



  
  
 



  
  
    
  
  
  


