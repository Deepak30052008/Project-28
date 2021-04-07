
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box1,box2,box3,ground,paper,dustbin,picture,rope;

function preload()
{
picture=loadImage("dustbin.jpg")	
}

function setup() {
	createCanvas(800, 600);
dustbin=createSprite(700,522,50,50);
dustbin.addImage(picture);
dustbin.scale=0.2

	engine = Engine.create();
	world = engine.world;
		var ground_options={
		isStatic:true
	}

    paper=new Paper(100,575,50,50)
    ground=Bodies.rectangle(400,590,800,20,ground_options);

	fill("brown");
	box1= new Box(695,570,105,20);
	box2= new Box(633,522,20,115);
	box3 = new Box(759,522,20,115)
	rope = new Rope(paper.body,{x:250,y:500});
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
  box3.display();
  box2.display();
  paper.display();
  rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly();
}

