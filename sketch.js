var canvas;
var music;
var surface1, surface2, surface3, surface4, ball;
var wall1,wall2, wall3, wall4;

function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 560, 180, 20)
    surface1.shapeColor = "Lime"

    surface2 = createSprite(300, 560, 180, 20)
    surface2.shapeColor = "Brown"

    surface3 = createSprite(500, 560, 180, 20)
    surface3.shapeColor = "Red"

    surface4 = createSprite(700, 560, 180, 20)
    surface4.shapeColor = "Yellow"

    //create box sprite and give velocity
    ball = createSprite(random(20, 750), 30, 50, 50)
    ball.velocityX = 5
    ball.velocityY = 5
    ball.shapeColor = "White"

    wall1 = createSprite(800, 0, 1, 10000)
    wall2 = createSprite(1, 0, 1, 10000)  
    wall3 = createSprite(1, 600, 1000, 1)
    wall4 = createSprite(1, 1, 1000, 1)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites()

    ball.bounceOff(wall1)
    ball.bounceOff(wall2)
    ball.bounceOff(wall3)
    ball.bounceOff(wall4)

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)) {
      //  music.play()
        ball.shapeColor = "Lime"
        ball.velocityX = ball.velocityY = 0
        
    }

    if(surface2.isTouching(ball) && ball.bounceOff(surface2)) {
     //   music.play()
        ball.shapeColor = "Brown"
        ball.velocityX = ball.velocityY = 0
        
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)) {
      //  music.play()
        ball.shapeColor = "Red"
        ball.velocityX = ball.velocityY = 0
        
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4)) {
      //  music.play()
        ball.shapeColor = "Yellow"
        ball.velocityX = ball.velocityY = 0
        
    }
    
    drawSprites();
}
