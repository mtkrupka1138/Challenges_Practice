// Global variables

const totalGuessCount = 6;
let currentGuessCount = 0;
let wordInProgress = [];
let currentLetter = 0;
// let correctWord = ;


// Event listeners for physical and on-screen keyboards 

// on-screen keyboard
document.getElementById("keyboard").addEventListener("click", screenKeyboard);

function screenKeyboard(e) {
    console.log(e.target.textContent);
}


// physical keyboard
addEventListener("keyup", physicalKeyboard);

function physicalKeyboard(e) {
    console.log(e.key);
}


// what happens when key is called 
// letter needs to be added to wordInProgress
// need indices 0-4 filled for each guess count
