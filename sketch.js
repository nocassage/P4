let video;
let handPose;
let mao;
let vg = 57;
let vgs = 0;


function fazFuncionar() {
 // console.log("hand pose loaded");
  handpose.on("predict", gotPose);
}

//se detetar:
  //function mousePressed() {
    //console.log(mao);
  //}

function gotPose(results) {
  mao = results;
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video, fazFuncionar);
}

function draw() {
//a transição entre tons suave
  if (mao && mao.length > 0) {
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
  strokeWeight(1);
  ellipsoid(height/4, height/4, height/4);
}
