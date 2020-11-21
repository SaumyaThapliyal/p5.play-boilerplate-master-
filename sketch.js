var speed,weight;
var car,wall;
function setup() {
  createCanvas(1200,400);
  
  wall = createSprite(1150,200,60,height/2);
  wall.shapeColor = color(255,255,255);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = color(51,102,255)
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if(wall.x - car.x<car.width/2 + wall.width/2){
    car.velocityX = 0;
  
    var deform = 0.5*weight*speed*speed/22500;
    if (deform>180){
      car.shapeColor = color(255,0,0);
    }

    if (deform<180 && deform>100){
      car.shapeColor = color(255,255,0);
    }
     if (deform<100){
       car.shapeColor = color(0,255,0);
     }
    }
  
  drawSprites();
}