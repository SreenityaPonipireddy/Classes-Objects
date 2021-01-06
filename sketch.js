//1st step: Name Aliasing-Used to indicate a name (nickname)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

//2nd step: Declaring your own world and engine
var myEngine,myWorld;
//3rd step: Declaring whatever objects you wish to make
var box1;
var ground1;
var pig1;



function setup() {
  createCanvas(1200,400);

  //4th step: Creating your own engine and adding world to it

  //Acquiring all of the Physics Engine properties into myEngine
  myEngine=Engine.create();
  //Adding engine.world to myWorld
  myWorld = myEngine.world;


  //5th step: Creating your own objects
  //Giving what shape the object should be 
  
  //Creating box object as box1 
  box1= new Box(700, 320, 70, 70);
  ground1 = new Ground(600, height, 1200, 20);
  box2= new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1= new Log(810, 260, 300, PI/2);
  bird1 = new Bird(100, 100);
  box3= new Box(720, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  log2= new Log(810, 180, 300, PI/2);
  pig2 = new Pig(810, 220);
  box5= new Box(800, 160, 70, 70);
  log3= new Log(760, 120, 150, PI/7);
  log4= new Log(870, 120, 150, -PI/7);

}

function draw() {
  background("black");  
  //VERY IMPORTANT 6th Step: Updating engine
  Engine.update(myEngine);
  //Displaying box 
  box1.display();
  ground1.display();
  box2.display();
  pig1.display();
  log1.display();
  bird1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();
 //Drawsprites is not required because we only created a rectangle using physics engine body and no sprites
}