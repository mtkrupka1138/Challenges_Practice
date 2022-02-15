// Define variables and event listeners 

let greetingDisplay = document.getElementById("greeting-display");
let customGreeting = document.getElementById("custom-greeting");
let from = document.getElementById("sender-input");
let fromToggle = document.getElementById("from-toggle");
let greetingMessage;


// Function for event listener for updating from field

function updateFrom() {

    from.addEventListener("input", function() {
        if (this.value !== "") {
            fromToggle.innerHTML = "From: " + this.value;
        }
        if (this.value === "") {
            fromToggle.innerHTML = this.value
        }
        
    });

}


// Function for event listener for updating custom field

function updateCustom() {

    customGreeting.addEventListener("input", function() {
        if (this.value !== "") {
            greetingDisplay.innerHTML = this.value
        }
        if (this.value === "") {
            greetingDisplay.innerHTML = "Type custom greeting below"
        }
    });

}


// Function for greeting selection on change

function writeGreeting() {
    greetingMessage = document.getElementById("greeting-select").value;

        if (greetingMessage === "Custom greeting") {
            customGreeting.style.display = "flex";
            greetingDisplay.innerHTML = "Type custom greeting below"
            updateCustom();
            updateFrom();
        }
            
        else {
            customGreeting.style.display = "none";
            customGreeting.value = "";
            greetingDisplay.innerHTML = greetingMessage
            updateCustom();
            updateFrom();
        }
}



