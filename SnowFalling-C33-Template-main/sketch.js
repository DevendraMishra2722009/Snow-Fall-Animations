const  Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world
function preload(){
  backGroundImage= loadImage("snow2.jpg")
}
  

function setup() {

  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
 snow1=new Snow(200,100,50,50)
 snow2=new Snow(300,150,50,50)
 snow3=new Snow(400,200,50,50)
 snow4=new Snow(450,250,50,50)
 snow5=new Snow(200,300,50,50)
}

function draw() {
  Engine.update(engine)
  background(backGroundImage);  
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()

}