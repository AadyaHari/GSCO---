
var car1, wall1;
var speed, weight;
var deformation;
deformation = 0;

function setup() {
  createCanvas(1600,725);

  speed=random(55,90)
  weight=random(400,1500)

  car1 = createSprite(50,200,50,50);
  wall1 = createSprite(1500,200,40,height/2);

  car1.velocityX = speed;
  
}

function draw() {
  background("violet");  

if(wall1.x-car1.x < (car1.width/2 + wall1.width)/2){
    car1.velocityX = 0;
    wall1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
  
if(deformation>180){
  car1.shapeColor = "red";
}
if(deformation<180 && deformation>100){
car1.shapeColor = "yellow";
}
if(deformation<100){
  car1.shapeColor = "green";
}
}
console.log(deformation);
drawSprites();
fill("black");
textSize(30);
text("Deformation: " + Math.floor(deformation),50,500);
 }