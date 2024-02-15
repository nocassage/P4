let video;
let handPose;
let hands;
let vg = 57;
let vgs = 0;

function modelReady() {
  console.log("hand pose loaded");
  handpose.on("predict", gotPose);
}

function mousePressed() {
  console.log(hands);
}

function gotPose(results) {
  hands = results;
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video, modelReady);
}

function draw() {
  if (hands && hands.length > 0) {
    if (vg < 200) vg+=2;
    if (vgs < 255) vgs+=2;
  } else {
    if (vg > 57) vg-=2;
    if (vgs > 0) vgs-=2;
  }
  background(0);
  fill(88, vg, 59);
  stroke(0, 0, vgs);
  rotateY(millis() / 4000);
  strokeWeight(0.3);
  ellipsoid(height/2, height/2, height/2);
}
