noseX =0;
noseY = 0;
left_wristX = 0;
right_wristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on("pose" , gotposes);
}
function draw(){
    background("#e3b8f5");
    fill("#de73ff");
    stroke("#de73ff");
    square(noseX,noseY,difference);
    document.getElementById("width").innerHTML = "The width and height of the square is " + difference;
}
function modelLoaded(){
    console.log("pose Net is initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = Math.floor(left_wristX - right_wristX) ;
    }
}



