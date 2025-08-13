let changecolorbtn = document.querySelector(".changecolor");
let body = document.querySelector("body");
let stopbtn = document.querySelector(".stopcolor");
let intervalId = null;

let colors = ["red", "orange", "green", "blue", "purple", "yellow", "cyan", "black", "pink", "lime"];

changecolorbtn.addEventListener("click", () => {
    changeColor();
});

stopbtn.addEventListener("click", () => {
    stopcolorbtn();
    // intervalId = null;
    // console.log()
});

function changeColor() {
    let index = Math.floor(Math.random() * colors.length);
    let color = colors[index];
    body.style.background = color;
}

intervalId = setInterval(changeColor, 10000);

function stopcolorbtn(){
    clearInterval(intervalId);
    console.log("change stopped");
}
