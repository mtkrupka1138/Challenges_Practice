// Declare variables and event listener for button click

const body = document.body;
const heart = document.getElementById("heart");
const heartElement = document.querySelector('.heart');
document.getElementById("btn").addEventListener("click", changeColor);


// Function to update the background colors of body and heart elements (changes at same time)

function updateColor(backgroundColor) {

    body.style.setProperty('background-color', backgroundColor.colors[0].value);
    heart.style.setProperty('background-color', backgroundColor.colors[1].value);
    document.documentElement.style.setProperty("--pseudo", backgroundColor.colors[1].value);

    colorHeartAfter = backgroundColor.colors[1].value;

}


// Async/await function to retrieve two (2) colors from API random color generator and provide to update function

async function changeColor() {

    let response = await fetch ('https://apis.scrimba.com/hexcolors/?count=2');
    let color = await response.json();
    updateColor(color);

}



