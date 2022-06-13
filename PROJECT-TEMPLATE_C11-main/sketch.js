var Sea
function preload(){
Seaimg0 = loadImage("sea.png")
  Seaimg1 = loadImage("ship-1.png")
  Seaimg2 = loadImage("ship-2.png")
  Seaimg3 = loadImage("ship-3.png")
  Seaimg4 = loadImage("ship-4.png")

}

function setup(){
  Sea = createSprite(200,200,90,90)
  Sea.addImage(Seaimg0)
  
  
  
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
  if(Sea.x < 0){  
  Sea.x = Sea.width/2
  }
  
  
  
  drawSprites();

 
}
