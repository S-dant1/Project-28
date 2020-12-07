
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var tree, ground, stone, boy;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	tree = new Tree(800, 400);
	ground = new Ground(800, 790);
	stone = new Stone(500, 500);
	
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
ground.display();
   image(boy, 300, 500, 100, 100);
  tree.display();
  stone.display();
  
  drawSprites();
 
}



