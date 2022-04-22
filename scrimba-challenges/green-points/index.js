const pointsEl = document.getElementById("points-p");
const btnsContainer = document.getElementById("btns-container");
const activityCount = document.getElementById("activity-count");
let count = Number(pointsEl.innerHTML[0]);
let activity = 0;

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
    if (newBtn.getAttribute("data-good") === "true") {
      newBtn.style.backgroundColor = "green";
    }
    else {newBtn.style.backgroundColor = "red"}
  })
 
  document.querySelectorAll(".btn").forEach(item => 
    {item.addEventListener('click', event => {
      let target = event.target;
      console.log(activity);
      if (target.getAttribute("data-good") === "true") {
        count += 5;
        activity += 1;
        let stringCount = count.toString();
        let activityString = activity.toString();
        pointsEl.innerHTML = `${stringCount} points today!`;
        activityCount.innerHTML = `${activityString}`;
      }
      if (target.getAttribute("data-good") === "false") {
        count -= 5;
        let stringCount = count.toString();
        pointsEl.innerHTML = `${stringCount} points today!`;
      }
      if (count >= 0) {
        document.body.style.backgroundColor = "var(--turquoise-green)";
      }
      else {document.body.style.backgroundColor = "red"}
    })
  })
}

renderBtns()

