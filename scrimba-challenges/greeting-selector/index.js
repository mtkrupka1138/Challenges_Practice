// Define variables and event listeners 

let greetingDisplay = document.getElementById("greeting-display");
let greetingMessage



// Function for writing greeting

function writeGreeting() {
    greetingMessage = document.getElementById("greeting-select").value;
    // console.log("you selected:" + greetingMessage)
    greetingDisplay.textContent = greetingMessage;
    
}