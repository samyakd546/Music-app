Counting_Stars = ""
Unstoppable = ""

function preload(){
    Counting_Stars = loadSound("Counting.mp3")
    Unstoppable= loadSound("Unstoppable.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized")
}

function gotposes(result){
    if(results.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristx +"rightWristY = " + rightWristY);
        
        
    }
    }

    function draw(){
        image(video, 0, 0, 600, 500);
    }