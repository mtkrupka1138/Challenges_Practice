document.getElementById("btn").addEventListener("click", correct);
let stringToCorrect = document.getElementById("paragraph").innerHTML;
let newString = [];

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
            else {
                let otherLetter = splitString[i].toLowerCase();
                newString.push(otherLetter);
            }
        }
    
    document.getElementById("paragraph").innerHTML = newString.join('')
    }
    
}
