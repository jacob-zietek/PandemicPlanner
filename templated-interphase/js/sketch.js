var len1ForSim, len2;
var scaleInchToPixel;
var simStartX, simStartY;

len1ForSim = 20; // input dimension 1 in in
len2ForSim = 40; // input dimension 2 in in

simStartX = 0;
simStartY = 0;

var mouseXp = 0;
var mouseYp = 0;

function setup() {
    
    // Initializes a canvas where width is the longer dimension and
    // the height and width are still proportional to scale to screen.
    // This is so that we can display what we want properly no matter
    // the screen size. 
    // !!! May have issues on mobile, although we don't care that much
    // Sets scale constant so code is ez pz

    if (len1ForSim < len2ForSim) {
        scaleInchToPixel = windowWidth / len2ForSim;
        var canvas = createCanvas(windowWidth, len1ForSim * scaleInchToPixel);
    } else {
        scaleInchToPixel = windowWidth / len1ForSim;
        var canvas = createCanvas(windowWidth, len2ForSim * scaleInchToPixel);
    }

    canvas.parent('drawingCanvas');

}

function draw() {
    background(255); // Sets background color


    rect(0, 0, windowWidth, height);

    
    // Maps out how far everyone needs to be to abide by social 
    // distancing standards

    for (var i = -abs(simStartX); i < windowWidth; i = i + (6 * scaleInchToPixel)) {
        for (var j = -abs(simStartY); j < height; j = j + (6 * scaleInchToPixel)) {
            strokeWeight(5);
            point(i, j);
        }
    }

    // Text that displays the side lengths of the room

    text(round(windowWidth * (1 / scaleInchToPixel)) + "ft", windowWidth / 2, height - 20);
    text(round(height * (1 / scaleInchToPixel)) + "ft", 20, height / 2);

    
}

function mouseDragged() {

    // Updates the unit point for drawing socially distanced points

    simStartX += (mouseX - mouseXp);
    simStartY += (mouseY - mouseYp);
    mouseXp = mouseX;
    mouseYp = mouseY;

}