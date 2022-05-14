m1= "music.mp3";
m2= "music2.mp3"


function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

    video = createCapture(VIDEO);
	video.hide();
}

function preload(){
loadSound(m1);
loadSound(m2);
}

function draw(){
    image(video, 0, 0, 600, 500);
}