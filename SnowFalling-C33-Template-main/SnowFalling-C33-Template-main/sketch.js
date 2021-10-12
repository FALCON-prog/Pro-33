const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 var engine, world;
 var snow, snow1, snow2 , snow3, snow4 , snow5, snow6, snow7, snow8, snow9, snow10;
 var man, man4;
function preload(){
  backgroundIMG = loadImage("snow3.jpg");
  }

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  man = new mat(350,440);
  man4 = new mat(800,190);
  snow = new Snow(120,200);
  snow2 = new Snow(random(100,1100),random(100,700));
  snow3 = new Snow(random(100,1100),random(100,700));
  snow4 = new Snow(random(100,1100),random(100,700));
  snow5 = new Snow(random(100,1100),random(100,700));
  snow6 = new Snow(random(100,1100),random(100,700));
  snow7 = new Snow(random(100,1100),random(100,700));
  snow8 = new Snow(random(100,1100),random(100,700));
  snow9 = new Snow(random(100,1100),random(100,700));
  snow10 = new Snow(random(100,1100),random(100,700));
  console.log(snow);
}

function draw() {
  background(255,255,255); 
   image(backgroundIMG,0,0,width,height);
   Engine.update(engine);
   snow.display();
   snow2.display();
   snow3.display();
   snow4.display();
   snow5.display();
   snow6.display();
   snow7.display();
   snow8.display();
   snow9.display();
   snow10.display();
   man.display();
   man4.display();
  drawSprites();
}