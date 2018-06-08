var textChange = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var grad = document.getElementById("gradient");
var button = document.querySelector("#ranColor");

function setGradient() {
    grad.style.background = "linear-gradient(to right, " + color1.value + 
    ", " +color2.value + ")";
    textChange.textContent = color1.value +", " + color2.value;
}
 
//Random color generator
function randomColor() {
    var colorString = "0123456789abcdef";
    var randomColor = "#";
    for (var i = 0; i <= 5; i++) {
      randomColor += colorString[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}
 
//Get random colors from random color generator code
function getRandomColor() {
 color1.value = randomColor();
 color2.value = randomColor();
 grad.style.background = "linear-gradient(to right, " + color1.value + 
 ", " +color2.value + ")";
 textChange.textContent = color1.value +", " + color2.value;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//Random color selector
button.addEventListener("click", getRandomColor);