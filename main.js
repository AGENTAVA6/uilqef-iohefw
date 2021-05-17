left_wrist = 0;
right_wrist = 0;
noseY = 0;
noseX = 0;
difference= 0;
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 500);
canvas.position(560, 150)
PoseNet = ml5.poseNet(video, modelLoaded);
PoseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is op")
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = "+ noseX+ 'noseY= ' +noseY);
left_wrist = results[0].pose.leftWrist.x;
right_wrist = results[0].pose.rightWrist.x;
difference = floor(left_wrist - right_wrist);
console.log("leftwirst = "+ left_wrist + "right wrist = "+ right_wrist + "difference = " + difference);
}
}
function draw(){
    background('#969A97');
document.getElementById("lol").innerHTML = "Width and height of the text will be = "+ difference + "px";
textSize(difference)
fill('#F90093');
stroke("#F90093")
text("Avyakt",noseX, noseY)
}