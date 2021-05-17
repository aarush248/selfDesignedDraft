const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, p1Img, p1, p2;
var playerCount=0, gameState=0;
var form, game, player;
var allPlayers, goal=0;


//var playerCount=0, gameState=0;
//var form, game, player;

function preload(){
bg=loadImage("Img/bng.png")
p1Img=loadImage("Img/p1.png")
}


function setup(){
  var canvas = createCanvas(1300,630);
    engine = Engine.create();
    world = engine.world;

    p1=createSprite(50, 365)
    p1.addImage(p1Img)
    
 /* database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getState()
  game.start()*/
  
  
}

function draw(){
  //background("white");
  Engine.update(engine);
  background(bg)
    
  drawSprites();
}


