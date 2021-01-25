nosex=0;
nosey=0;
function preload(){
mustache=loadImage("https://i.postimg.cc/DwTTsT7Y/mustache.png")
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300,300);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function draw(){
image(video, 0,0, 300,300);
image(mustache,nosex,nosey,80,35);
}
function takeSnapshot(){
       save("image.png");
       
}
function modelLoaded(){
       console.log("Model has been loaded");
}
function gotPoses(results){
       if(results.length>0){
              console.log(results);
              console.log(results[0].pose.nose.x);
              console.log(results[0].pose.nose.y);
              nosex=results[0].pose.nose.x-40;
              nosey=results[0].pose.nose.y+10;
       }
       else{
              console.error(error);
       }
}