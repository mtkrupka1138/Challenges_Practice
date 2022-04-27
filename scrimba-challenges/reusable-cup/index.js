const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10]
const reusableCupDiscount = 0.5
const coffeePrice = 3
const dailySavings = document.getElementById("daily-savings")
const totalSavings = document.getElementById("total-p")
let savingsPerDayArr = []
document.getElementById("add-btn").addEventListener("click", addCoffee)

savingsPerDayArr = coffeesPerDay.map(cups => cups * reusableCupDiscount)

savingsPerDayArr.forEach(element => {
    let p = document.createElement("p");
    dailySavings.appendChild(p);
    p.innerHTML = `${Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: 'currency',
    }).format(element)}`;
    p.classList.add("daily-savings-amount");
});

let allSavingsP = document.querySelectorAll(".daily-savings-amount");

for (let i=0; i<allSavingsP.length; i++) {
    let p = allSavingsP[i];
    p.innerHTML = `Day ${i+1}: ${p.innerHTML}`;
}

totalSavingsNum = savingsPerDayArr.reduce((previous, current) => previous + current, 0);
totalSavings.innerHTML = 
    `☕️ You have saved: ${Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: 'currency',
    }).format(totalSavingsNum)}`
    
function addCoffee() {
    
}

