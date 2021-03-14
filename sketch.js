
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hamer, rubber, ground, stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new Stone(200,200,100,100);
ground = new Ground(300,700,1000,50);

hammer = new Hammer(300,200,50,10,PI/2);
rubber = new Rubber(200,100,50,PI/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  ground.display();
  
  hammer.display();
  stone.display();
  drawSprites();
 
}



