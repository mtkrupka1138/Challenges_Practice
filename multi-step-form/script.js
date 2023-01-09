// document element variables
const btnsNext = document.querySelectorAll(".btn-next");
const btnsPrev = document.querySelectorAll(".btn-prev");
const stepProgress = document.getElementById("steps-overview");
const formSteps = document.querySelectorAll(".form-step");
const numSteps = document.querySelectorAll(".step");

let stepCount = 0;

// next buttons acton
btnsNext.forEach((nextBtn) => addEventListener("click", () => {
    stepCount++;
    updateForm();
    updateSteps();
}))

// previous buttons action
btnsPrev.forEach((prevBtn) => addEventListener("click", () => {
    stepCount--;
    updateForm();
    updateSteps();
}))

// function for updating visible form
function updateForm() {

}

// function for updating steps
function updateSteps() {
    
}