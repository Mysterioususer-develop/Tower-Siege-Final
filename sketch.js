const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1;
var backgroundImg;
var score=0;

var gameState = "onSling";

function setup() {
 var canvas = createCanvas(1200,500);
 
 engine = Engine.create();
 world = engine.world;
 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

//platform#1
platform = new Ground(490,275,240,30);
//platform#2
platform2 = new Ground(950,200,240,30);
//Row #1
block1 = new Box(430,235,30,40);
block2 = new Box(460,235,30,40);
block3 = new Box(490,235,30,40);
block4 = new Box(520,235,30,40);
block5 = new Box(550,235,30,40);
block6 = new Box(580,235,30,40);
block7 = new Box(400,235,30,40);
//Row#2
block8 = new Box(460,195,30,40);
block9 = new Box(490,195,30,40);
block10 = new Box(520,195,30,40);
block11 = new Box(550,195,30,40);
block12 = new Box(430,195,30,40);
//Row#3
block13 = new Box(490,155,30,40);
block14 = new Box(460,155,30,40);
block15 = new Box(520,155,30,40);
//Row#4
block16 = new Box(490,115,30,40);

//Row#1 for 2nd platform
block17 = new Box(980,160,30,40);
block18 = new Box(950,160,30,40);
block19 = new Box(920,160,30,40);
block20 = new Box(890,160,30,40);
block21 = new Box(1010,160,30,40);
//Row#2 for 2nd platform
block22 = new Box(950,120,30,40);
block23 = new Box(920,120,30,40);
block24 = new Box(980,120,30,40);
//Row#3 for 2nd platform
block25 = new Box(950,80,30,40);
//launcher
slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  



  background("black");
  fill("white");
textSize(40);
text("Score is "+score,800,50);
textSize(20);
text("Click Space for another life",400,50);

  Engine.update(engine);  
  //drawSprites();
  platform.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  
  slingshot.display();
ellipseMode(RADIUS);
ellipse(polygon.position.x,polygon.position.y,20,20);

}
function mouseDragged(){
 Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

