const pointsEl = document.getElementById("points-p")
const btnsContainer = document.getElementById("btns-container")
let count = Number(pointsEl.innerHTML[0]);

const actionsArr = [
 {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false
  }
]

function renderBtns(){

  actionsArr.forEach(action => {
    let newBtn = document.createElement("button");
    let btnContent = document.createTextNode(`${action.emoji} ${action.text}`);
    btnsContainer.appendChild(newBtn);
    newBtn.appendChild(btnContent);
    newBtn.classList.add("btn");
    newBtn.setAttribute("data-good", `${action.good}`);
  })
 
  document.querySelectorAll(".btn").forEach(item => 
    {item.addEventListener('click', event => {
      let target = event.target;
      if (target.getAttribute("data-good") === "true") {
        count += 5;
        let stringCount = count.toString();
        pointsEl.innerHTML = `${stringCount} points today!`;
      }
      if (target.getAttribute("data-good") === "false") {
        count -= 5;
        let stringCount = count.toString();
        pointsEl.innerHTML = `${stringCount} points today!`;
      }
    })
  })
}

renderBtns()



// stretch goal 1️⃣: Change each button color, green for good activities, red for bad.

// stretch goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3️⃣: Add an activity count.

