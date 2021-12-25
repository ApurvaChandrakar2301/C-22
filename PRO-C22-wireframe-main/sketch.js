const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var groungImg;
var tower,towerImg;
var cannon,cannonImg;


function preload() {
  groundImg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var op = {
    isStatic:true
    
  }
  ground=Bodies.rectangle(600,590,1200,20,op)
  World.add(world,ground)

  tower=Bodies.rectangle(150,350,150,300,op)
  World.add(world,tower)

  cannon=new Cannon(160,150,130,100,20)
 
}

function draw() {
  background(189);
  image (groundImg,0,0,1200,600)
  Engine.update(engine);
  rectMode(CENTER)


  rect(ground.position.x,ground.position.y,1200,20)
  push()
  imageMode(CENTER)
  image (towerImg,tower.position.x,tower.position.y,150,300)
  pop()

  cannon.display()


}
