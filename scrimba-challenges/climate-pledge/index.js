const body = document.body;
const formSubmit = document.getElementById("form-submit");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxesContainer = document.getElementById("checkboxes-container");
const pledge = document.getElementById("form");
const thanks = document.getElementById("thank-you");
const pledgeCheck = document.getElementById("pledge-check");
const pledgeMsg = document.querySelector(".tooltip");
const toolTipMsg = document.querySelector(".tooltiptext");

pledge.addEventListener("submit", disappear);

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", validate) 
});

function disappear(event) {
    let pledgeName = document.getElementById("name").value;
    event.preventDefault();
    pledge.style.display = "none";
    thanks.innerHTML = `Thank you ${pledgeName} for your pledge to the Earth!`;
    thanks.style.display = "flex";
}

function validate() {
    let checkedBoxes = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    formSubmit.disabled = true;
    pledgeMsg.appendChild(toolTipMsg);
    if (checkedBoxes) {
        formSubmit.disabled = false;
        pledgeMsg.removeChild(toolTipMsg);
    }
}



     