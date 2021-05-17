var counter = 0;


function changeImg(){
var image = document.getElementById('lampe');
if(image.src.match("bulbon")){
    image.src = "images/bulboff.gif";
} else {
    image.src = "images/bulbon.gif";
}
counter = counter + 1;
document.getElementById('counter').innerText = counter;
}

var schalterLampe = document.getElementById('lampe-schalter');
schalterLampe.onclick = changeImg;

var sliderFun = function updateSlider(){
    slideAmount = event.target.value;
    var display = document.getElementById('chosen');
    display.innerHTML = slideAmount;
    var pic = document.getElementById('lampe');
    pic.style.width = slideAmount + "%";
    pic.style.height = slideAmount + "%";
}

document.getElementById('slide').onchange = sliderFun;