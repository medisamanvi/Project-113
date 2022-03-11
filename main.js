function preload(){

}

function setup(){
    canvas=createCanvas(800,550);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,275,150,250,250);
    fill("pink");

    rect(80,100,25,350);
    rect(690,100,25,350);
    rect(115,60,555,25);
    rect(115,470,555,25);

    fill("black");
    circle(90,70,80);
    circle(700,70,80);
    circle(700,480,80);
    circle(90,480,80);
}

function take_snapshot(){
    save("testing.png")
}
