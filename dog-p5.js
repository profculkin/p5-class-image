let img, xPos;
function preload(){
    img = loadImage('images/dog.jpg');
    xPos = 0;
}
function setup() {
    image(img, xPos, 0);
    xPos = xPos + 5;
}

function draw() {
    image(img, 
}