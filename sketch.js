var car,wall;

var speed,weight;


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  background.shapecolor=color;  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
  {
      car.shapecolor=(255,0,0);
  }

  if(deformation<100)
  {
    car.shapecolor=color(0,255,0);
    
  }
}

//car.bounceoff=wall
}