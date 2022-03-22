// import { WORDS } from "./words";


// Global variables

const totalGuessCount = 6;  // variable for total number of words to be guessed
let guessesLeft = totalGuessCount;
let wordInProgress = [];    // current word being typed
let currentLetter = 0;  // current letter
// let correctWord = ;  // random word generated/chosen from array 


// Event listeners for physical and on-screen keyboards 

// on-screen keyboard
document.getElementById("keyboard").addEventListener("click", screenKeyboard);

function screenKeyboard(e) {
    let keyStrokeScreen = e.target.textContent;
}


// physical keyboard
addEventListener("keyup", physicalKeyboard);

function physicalKeyboard(e) {
    let keyStrokePhys = e.key;

    if (guessesLeft === 0) {
        return
    }

    if(keyStrokePhys === "Backspace" && currentLetter !== 0) {
        deleteLetter();
        return;
    }

    if(keyStrokePhys === "Enter") {
        checkGuess();
        return;
    }

    let checkKeyPressed = keyStrokePhys.match(/[a-z]/gi)
    if(!checkKeyPressed || checkKeyPressed.length > 1) {
        return;
    }
    else { addLetter(keyStrokePhys); }

}

// functions for deleting and adding letters

function deleteLetter() {

    let currentGuessWord = document.getElementsByClassName("row-board")[totalGuessCount - guessesLeft];
    let letterTile = currentGuessWord.children[currentLetter - 1];
    letterTile.textContent = ""
    wordInProgress.pop();
    currentLetter -= 1; 

}

function addLetter(letter) {

    let currentGuessWord = document.getElementsByClassName("row-board")[totalGuessCount - guessesLeft];
    let letterTile = currentGuessWord.children[currentLetter];
    letterTile.textContent = letter; 
    wordInProgress.push(letter);
    currentLetter += 1;

}

// function to check guess

function checkGuess(word) {
    
}

// function to color keyboard

function colorKeyboard() {

}



