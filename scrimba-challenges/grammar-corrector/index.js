// Define variables and event listeners

document.getElementById("btn").addEventListener("click", correct);
let stringToCorrect = document.getElementById("paragraph").innerHTML;
let newString = [];


// Function to capitalize first letters of each word 
// and make all other letters lowercase; keeps spaces and special characters
// as is

function correct() {
    
    if (document.getElementById("paragraph").innerHTML === newString.join('')) {
        alert("Refresh the page!")
    }
    else {
        let splitString = stringToCorrect.split('');
        for (let i = 0; i < splitString.length; i++) {
            if (splitString[i] === splitString[0]) {
                let firstLetter = splitString[0].toUpperCase();
                newString.push(firstLetter);
            }
            else if (splitString[i] === ' ') {
                newString.push(splitString[i]);
            }
            else if (splitString[i-1] === ' ') {
                let capitalLetter = splitString[i].toUpperCase()
                newString.push(capitalLetter);
            }
            else {
                let otherLetter = splitString[i].toLowerCase();
                newString.push(otherLetter);
            }
        }
        // original code for first test case only
        // let splitString = stringToCorrect.split('');
        // for (let i = 0; i < splitString.length; i++) {
        //     if (splitString[i] === splitString[0]) {
        //         let firstLetter = splitString[0].toUpperCase();
        //         newString.push(firstLetter);
        //     }
        //     else {
        //         let otherLetter = splitString[i].toLowerCase();
        //         newString.push(otherLetter);
        //     }
        // }

        document.getElementById("paragraph").innerHTML = newString.join('')
    }

}
