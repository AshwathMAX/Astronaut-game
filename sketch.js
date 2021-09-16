var bath, brush, drink, eat, gym, iss, move, sleep;
var spaceman;

function preload(){
  iss= loadImage("Images/iss.png")
  bath= loadAnimation("Images/bath1.png", "Images/bath2.png")
  brush= loadAnimation("Images/brush.png")
  drink= loadAnimation("Images/drink1.png", "Images/drink2.png")
  eat= loadAnimation("Images/eat1.png", "Images/eat2.png")
  gym= loadAnimation("Images/gym1.png", "Images/gym2.png")
  move= loadAnimation("Images/move.png", "Images/move1.png")
  sleep= loadAnimation("Images/sleep.png")
}

function setup() {
  createCanvas(800,400);
  spaceman= createSprite(300, 230);
  spaceman.addAnimation("sleep", sleep);
  spaceman.scale=0.1;
}

function draw() {
  background(iss); 
  if(keyDown(UP_ARROW)){
    spaceman.addAnimation("brush", brush)
    spaceman.changeAnimation("brush")
    spaceman.y=350;
  }
  drawSprites();
}