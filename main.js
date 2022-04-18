song1 ="";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";


function preload()
{
    song1 = loadSound("Harry Potter Theme Song.mp3");
    song2 = loadSound("Harry Potter - Indian Theme Song (1).mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}


function draw()
{
    image(video, 0, 0, 600, 500);
}


function play()
{
    song.play();
}


function modelLoaded()
{
    console.log("Posenet Is Initialized!!");
}


function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}
