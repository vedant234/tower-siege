const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1;
var polygon;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  //stand
  stand1 = new Stand(430,250,200,10);

  //level one will contain four blocks, first block at (370,230,40,40);
 block1=new Block(370,230,40,40)
 block2=new Block(410,230,40,40)
 block3=new Block(450,230,40,40)
 block4=new Block(490,230,40,40)


  //level two will contain three blocks (390,190,40,40);
 block5=new Block(390,190,40,40)
 block6=new Block(430,190,40,40)
 block7=new Block(470,190,40,40)
  
  //level three will contain one block (430,150,40,40);
  block8=new Block(430,150,40,40)
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:80,y:250});

}
function draw() {
  background("black"); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);

  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);

  textSize(10);
  text("Press Space to take another attempt",650 ,350);

  ground.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);

  // display blocks
   block1.display()
   block2.display()
   block3.display()
   block4.display()
   block5.display()
  block6.display()
  block7 .display()
  block8.display()
  
  fill("gold");
  imageMode(CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}