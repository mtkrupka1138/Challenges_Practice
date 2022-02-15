document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
let balloon = document.getElementById("balloon-checkbox");
let balloonEmoji = document.getElementById("balloon-emoji");
balloon.addEventListener("click", emoji);


function emoji() {
    if (balloonEmoji.style.display === "inline") {
        balloonEmoji.style.display = "none";
    }
    else {balloonEmoji.style.display = "inline"}
}


function calculate() {
    let food = document.getElementById("food-select").value;
    let transport = document.getElementById("transport-select").value;
    let balloonCost

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