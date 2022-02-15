// Define variables and event listeners 

let greetingDisplay = document.getElementById("greeting-display");
let customGreeting = document.getElementById("custom-greeting");
let greetingMessage



// Function for writing greeting

function writeGreeting() {
    greetingMessage = document.getElementById("greeting-select").value;

    if (greetingMessage === "Custom greeting") {
        customGreeting.style.display = "flex";
        greetingDisplay.textContent = customGreeting.textContent;
    }
    else {
        customGreeting.style.display = "none";
        greetingDisplay.textContent = greetingMessage;
    }

    
    
}