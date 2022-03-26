import WORDS from "./words.js";


// Global variables

const totalGuessCount = 6;  // variable for total number of words to be guessed
let guessesLeft = totalGuessCount;
let wordInProgress = [];    // current word being typed
let currentLetter = 0;  // current letter
let correctWord = WORDS[Math.floor(Math.random()*WORDS.length)];
let correctWordSingles = correctWord;
console.log(correctWord);

// Event listeners for physical and on-screen keyboards 

// on-screen keyboard
document.getElementById("keyboard").addEventListener("click", screenKeyboard);

function screenKeyboard(e) {
    let keyStrokeScreen = e.target.textContent;

    if (guessesLeft === 0) {
        return;
    }

    if (keyStrokeScreen === "del" && currentLetter !== 0) {
        deleteLetter();
        return;
    }

    if (keyStrokeScreen === "enter") {
        checkGuess();
        return;
    }

    let checkKeyScreen = keyStrokeScreen.match(/[a-z]/gi)
    if(!checkKeyScreen || checkKeyScreen.length > 1) {
        return;
    }
    else { addLetter(keyStrokeScreen); }

}


// physical keyboard
addEventListener("keyup", physicalKeyboard);

function physicalKeyboard(e) {
    let keyStrokePhys = e.key;

    if (guessesLeft === 0) {
        return;
    }

    if (keyStrokePhys === "Backspace" && currentLetter !== 0) {
        deleteLetter();
        return;
    }

    if (keyStrokePhys === "Enter") {
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

    let currentGuessWordRow = document.getElementsByClassName("row-board")[totalGuessCount - guessesLeft];
    let letterTile = currentGuessWordRow.children[currentLetter - 1];
    letterTile.textContent = ""
    wordInProgress.pop();
    currentLetter -= 1; 

}

function addLetter(letter) {

    if (currentLetter === 5) {
        return
    }

    let currentGuessWordRow = document.getElementsByClassName("row-board")[totalGuessCount - guessesLeft];
    let letterTile = currentGuessWordRow.children[currentLetter];
    letterTile.textContent = letter; 
    wordInProgress.push(letter);
    currentLetter += 1;

}

// function to check guess

function checkGuess(word) {
    
    let correctGuess = Array.from(correctWord)

    // basic checks for number of letters requirement and for word existing in WORDS array
    
    if (wordInProgress.length < 5) {
        alert("Your word is not 5 letters long!")
        return
    }

    // if (!WORDS.includes(wordInProgress.join(''))) {
    //     alert("Your word does not exist!")
    // }

    // for loop to color tiles

    for (let i = 0; i < 5; i++) {

        let currentGuessWordRow = document.getElementsByClassName("row-board")[totalGuessCount - guessesLeft];
        let letterTile = currentGuessWordRow.children[i];
        let letterPosition = correctGuess.indexOf(wordInProgress[i]);
        
        if (letterPosition === -1) {
            // shade that letter tile gray
            letterTile.style.backgroundColor = "gray"
        }
        else {
            if (wordInProgress[i] === correctGuess[i]) {
                // shade that letter tile green 
                letterTile.style.backgroundColor = "green"
            }
            else {
                // shade that letter tile yellow 
                letterTile.style.backgroundColor = "yellow"
            }
            // do this for all letters that are correct, whether in right position or not
            // if letter is in word, eliminate it for next round so it is not matched again
            correctGuess[letterPosition] = "-"
        }
    }

    // if else statement for alerts and for next guesses/turns

    if (wordInProgress.join('') === correctWord) {
        alert("You guessed the correct word! Game over.")
        guessesLeft = 0;
        return;
    } 
    else {
        guessesLeft -= 1;
        wordInProgress = [];
        currentLetter = 0;

        if (guessesLeft === 0) {
            alert("You are out of guesses. Game over.")
        }
    }
}



// function to color keyboard to match tiles

function colorKeyboard() {

}



