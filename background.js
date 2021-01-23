const body = document.querySelector("body");

const IMG_NuMBER = 3;

function handleImgLoada(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src= `${imgNumber + 1}.gif`
    image.classList.add("bgImg")
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*5)
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();