var xPos, yPos, size;

function setup() {
  // put setup code here
   createCanvas(700, 400);
    xPos = 0;
    yPos = height/2;
    size = random(width);
    
}

function draw() {
    background("#cbf442"); 
    fill("#FF0000");
    ellipse(xPos, yPos, size, size);
    xPos = xPos+10;
    if(xPos >= width){
        xPos = 0;
        size = random(width);
    }
    //ellipse(width/2, height/2, 100, 100);
    //line below sets circle to position of cursor
    //ellipse(mouseX, mouseY, 100, 100);
    
    stroke("green");
    strokeWeight(20);
}

function mousePressed(){
    yPos = mouseY;
}

