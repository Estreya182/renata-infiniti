var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var points=0;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);

 
// Fondo en movimiento
garden=createSprite(200,160);
garden.addImage(gardenImg);


//crea al niño que corre
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(random(0, 350),-5, 10, 10);
orangeL = createSprite(random(0, 350),-5, 10, 10);
redL = createSprite(random(0, 350),-5, 10, 10);
}

function draw() {
  background(0);
  fill("white");
  textSize(20);
  text ("Puntuacio: "+ points, 198,395);
  
  
  // niño corriendo en el eje-x con el ratón
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();

  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 50 == 0) {
    if (select_sprites == 1) {
      createApples();
      
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }

  if (rabbit.isTouching(apple)) {
    apple.destroy();
    points = points +1;  
  }

  if (rabbit.isTouching(orangeL)) {
    orangeL.destroy();
    points = points +1;  
  }

  if (rabbit.isTouching(redL)) {
    redL.destroy();
    points = points -1;  
  }

  

}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 4;
apple.lifetime = 150;

if(points >9 && points <20){
  apple.velocityY = 6;
}
  
if(points >=20){
  apple.velocityY = 10;
}


}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.07;
orangeL.velocityY = 4;
orangeL.lifetime = 150;

if(points >9 && points <20 ){
  orangeL.velocityY = 6;
}

if(points >=20){
  orangeL.velocityY = 10;
}

}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.07;
redL.velocityY = 4;
redL.lifetime = 150;

if(points >9 && points <20){
  redL.velocityY = 6;
}
if(points >=20){
  redL.velocityY = 10;
}
}
