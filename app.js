









// 1 - click a button
// 2 - store the color of the button
// 3 - apply to background

// DOM
const buttons = document.querySelectorAll(".btn");
const header = document.getElementById("HeaderText");

let color;


buttons.forEach(button => {
    button.addEventListener("click",function clicked(){
        buttonClick(button);
    })
});

//Functions
function buttonClick(button){
    color = getComputedStyle(button).backgroundColor;
    header.style.display = "block";
    header.innerHTML = "RGB : "+color;
    applyBackgroundColor(color);
}


function applyBackgroundColor(color){
    document.body.style.backgroundColor = color;
}