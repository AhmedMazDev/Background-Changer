









// 1 - click a button
// 2 - store the color of the button
// 3 - apply to background

// DOM
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
let color;

const red = document.getElementById("Btn");

buttons.forEach(button => {
    button.addEventListener("click",function clicked(){
        buttonClick(button);
    })
});

//Functions
function buttonClick(button){
    color = getComputedStyle(button).backgroundColor;
    applyBackgroundColor(color);
}


function applyBackgroundColor(color){
    document.body.style.backgroundColor = color;
}