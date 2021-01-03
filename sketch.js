const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16,block17;
var polygon;

function setup()
{
 var canvas = createCanvas(1100,500);
 engine = Engine.create();
 world = engine.world;
 ground = new Ground(500,450,300,10);
 ground2 = new Ground(900,250,200,10);
 ground3 = new Ground(width/2,height,1200,5)
 block1 = new Box(380,420,40,50);
 block2 = new Box(420,420,40,50);
 block3 = new Box(460,420,40,50);
 block4 = new Box(500,420,40,50);
 block5 = new Box(540,420,40,50);
 block6 = new Box(580,420,40,50);
 block7 = new Box(620,420,40,50);
 block8 = new Box(400,370,40,50);
 block9 = new Box(440,370,40,50);
 block10 = new Box(480,370,40,50);
 block11 = new Box(520,370,40,50);
 block12 = new Box(560,370,40,50);
 block13 = new Box(600,370,40,50);
 block14 = new Box(420,320,40,50);
 block15 = new Box(460,320,40,50);
 block16 = new Box(500,320,40,50);
 block17 = new Box(540,320,40,50);
 block18 = new Box(580,320,40,50);
 block19 = new Box(440,270,40,50);
 block20 = new Box(480,270,40,50);
 block21 = new Box(520,270,40,50);
 block22 = new Box(560,270,40,50);
 block23 = new Box(460,220,40,50);
 block24 = new Box(500,220,40,50);
 block25 = new Box(540,220,40,50);
 block26 = new Box(480,170,40,50);
 block27 = new Box(520,170,40,50);
 block28 = new Box(500,120,40,50);

 block29 = new Box(840,220,40,50);
 block30 = new Box(880,220,40,50);
 block31 = new Box(920,220,40,50);
 block32 = new Box(960,220,40,50);
 block33 = new Box(880,170,40,50);
 block34 = new Box(920,170,40,50);
 block35 = new Box(900,120,40,50);

polygon = new Ball(70,400,40,40);

string = new SlingShot(polygon.body,{x:150,y:200});
 
 
}
function draw()
{
 background("grey");
 Engine.update(engine);




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
 block26.display();
 block27.display();
 block28.display();
 block29.display();
 block30.display();
 block31.display();
 block32.display();
 block33.display();
 block34.display();
 block35.display();

 string.display();
 polygon.display();
 ground.display();
 ground2.display();
 ground3.display();

 
}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    string.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(polygon.body,{x:150,y:200})
        string.attach(polygon.body);

    }
}
   