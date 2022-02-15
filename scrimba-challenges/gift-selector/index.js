document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
 

function calculate() {
    let food = document.getElementById("food-select").value;
    let transport = document.getElementById("transport-select").value;
    let balloon = document.getElementById("balloon-checkbox");
    let balloonCost

    if (balloon.checked) {
        balloonCost = 1;
    }
    else {balloonCost = 0}
    
    let totalCost = Number(food) + Number(transport) + Number(balloonCost);

    costEl.innerHTML = totalCost;
}