var spacebg;
var iss, issImg;
var spacecraft, spacecraftImg, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked;



function preload(){
spacebg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spacecraftImg = loadImage("spacecraft1.png");
spacecraftImg2 = loadImage("spacecraft2.png");
spacecraftImg3 = loadImage("spacecraft3.png");
spacecraftImg4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1000,600);
  iss = createSprite(500, 300, 50, 50);
  iss.addImage(issImg);

  spacecraft = createSprite(450, 500, 50, 50);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.25;
 
 
}

function draw() {
  background(spacebg);
  
  spacecraft.x = spacecraft.x + random(-1, 1);

  if(spacecraft.y === 419){
    spacecraft.x = 430; 
       hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 500, 500);
    
    spacecraft.addImage(spacecraftImg);
    spacecraft.scale = 0.4;
   
         }
 
  
    console.log(spacecraft.x);
    iss.depth = spacecraft.depth;
    iss.depth = iss.depth + 1;
        
        
     
  drawSprites();
}

function keyPressed(){
  //push();
  if(keyCode === 38){
spacecraft.y = spacecraft.y - 3;
spacecraft.addImage(spacecraftImg2);
  }

  if(keyCode === 37){
spacecraft.x = spacecraft.x - 5; 
spacecraft.addImage(spacecraftImg4);
  }

  if(keyCode === 39){
spacecraft.x = spacecraft.x + 5;
spacecraft.addImage(spacecraftImg3);
  }
  //pop();
}