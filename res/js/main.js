const changeButton = document.getElementById("changeButton");
const hexdec = document.getElementById("hexdec");
const inputColor = document.getElementById("inputColor");
var clickSound = new Audio('../res/audio/clicksound.mp3');
const body = document.body;

//VYTVOŘENÍ NÁHODNÉ BARVY--------------------------------
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//ZMĚNÍ BARVU NA RANDOM---------------------------------
function changeBackgroundColor() {
    var randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    hexdec.innerText = randomColor;
}
//BARVA PŘEVZATÁ Z USER INPUT---------------------------
function customBackgroundColor() {
    var userColor = inputColor.value;
    body.style.backgroundColor = userColor;
    hexdec.innerText = userColor;
    inputColor.value = "";
}

//POUŽITÍ TLAČÍTKA PRO ZMĚNU BARVY----------------------
changeButton.onclick = () =>{
    if (inputColor.value=="") {
        hideElement(changeButton);
    setTimeout(() => {
        showElement(changeButton)
    }, 1000);
    changeBackgroundColor();
    clickSound.play();
    }
    else{
        hideElement(changeButton);
    setTimeout(() => {
    showElement(changeButton)
    }, 1000);
    customBackgroundColor();
    clickSound.play();
    }
}

//HIDE ELEMENT------------------------------------------
const hideElement = (element) => {
    element.style.display = "none";
}
//SHOW ELEMENT------------------------------------------
const showElement = (element) => {
    element.style.display = "initial"
}