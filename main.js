function setup(){
    canvas = createCanvas(450, 450)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}
harryPotter = "";
yesterday = "";

function preload(){
    harryPotter = loadSound("hp.mp3")
    yesterday = loadSound("yesterday.mp3") 
     
}
function draw(){
    image(video, 0, 0, 450, 450)
}
