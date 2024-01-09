const changeButton = document.getElementById("changeButton");
var clickSound = new Audio('../res/audio/clicksound.wav');
const body = document.body;
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor() {
    var randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}
changeButton.onclick=()=> {
    hideElement(changeButton)
    setTimeout(() => {
        showElement(changeButton)
    }, 1000);
    changeBackgroundColor();
    clickSound.play();
}
const hideElement = (element) => {
    element.style.display = "none";
}
const showElement = (element) => {
    element.style.display = "initial"
}