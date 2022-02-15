// Define variables and add event listeners

document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
let balloon = document.getElementById("balloon-checkbox");
balloon.addEventListener("click", emoji);
let balloonEmoji = document.getElementById("balloon-emoji");
let food = document.getElementById("food-select").value;
let transport = document.getElementById("transport-select").value;
let balloonCost


// Function to toggle balloon emoji

function emoji() {

    if (balloonEmoji.style.display === "inline") {
        balloonEmoji.style.display = "none";
    }
    else {balloonEmoji.style.display = "inline"}

}


// Function to calculate total cost of gifts

function calculate() {

    if (balloon.checked) {
        balloonCost = 1;
    }
    else {balloonCost = 0}

    if (food === "" | transport === "") {
        alert("Please select your options!");
    }
    
    let totalCost = Number(food) + Number(transport) + Number(balloonCost);

    costEl.innerHTML = totalCost;
    
}