// Event listeners for button clicks

document.getElementById("btn-filter").addEventListener("click", filterDuplicates);
document.getElementById("btn-sort-order").addEventListener("click", sortEmojisOrder);
document.getElementById("btn-sort-simple").addEventListener("click", sortEmojisSimple);
document.getElementById("btn-add-flower").addEventListener("click", addEmoji);
document.getElementById("btn-add-donut").addEventListener("click", addEmoji);
document.getElementById("btn-add-rainbow").addEventListener("click", addEmoji);
let flower = document.getElementById("btn-add-flower");
let donut = document.getElementById("btn-add-donut");
let rainbow = document.getElementById("btn-add-rainbow");


// Original emoji array input 

const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    

// Variables for paragraph elements and for loop to add emojis to text content

let allEmojisP = document.getElementById("all-emojis-p")
let uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}


// Concatenate two portions of each emoji and push to new array

let emojiArr = allEmojisP.textContent.split('');
let concatEmoji = [];
for (let j = 1; j < emojiArr.length; j++) {
    if ( !(j%2===0) ) {
        let emojiConcat = emojiArr[j-1].concat(emojiArr[j])
            concatEmoji.push(emojiConcat)
    }
}


// Initiate array to store unique emojis

let uniqueEmoji = [];


// Mini function to populate uniqueEmoji array

function generateUnique() {

    for (let i = 0; i < concatEmoji.length; i++) {
        let prevArr = uniqueEmoji.slice();
        if (!prevArr.includes(concatEmoji[i])) {
            uniqueEmoji.push(concatEmoji[i]);
        }
    }
    return uniqueEmoji;
}


// Function to add emoji to original array

function addEmoji() {

    console.log(this.textContent);
    if (this.textContent === '🌸') {
        concatEmoji.push(this.textContent)
    }
    if (this.textContent === '🍩') {
        concatEmoji.push(this.textContent)
    }
    if (this.textContent === '🌈') {
        concatEmoji.push(this.textContent)
    }
    allEmojisP.textContent = concatEmoji.join('');
    
}


// Function to find/filter duplicates

function filterDuplicates() {

    generateUnique();

    let joinUnique = uniqueEmoji.join('');
    if (uniqueEmojisP.textContent !== joinUnique) {
        uniqueEmojisP.textContent = joinUnique;
    }
    else { alert("Refresh the page to restart!") }
    
}


function sortEmojisOrder() {

    let sortedEmojis = [];
    generateUnique();

    for (i = 0; i < uniqueEmoji.length; i++) {
        for (j = 0; j < concatEmoji.length; j++) {
            if (concatEmoji[j] === uniqueEmoji[i]) {
                sortedEmojis.push(concatEmoji[j]);
            }
        }
    }

    let joinSorted = sortedEmojis.join('');
    if (uniqueEmojisP.textContent !== joinSorted) {
        uniqueEmojisP.textContent = joinSorted;
    }
    else { alert("Refresh the page to restart!") }

}


// Function to sort by emoji type using basic sort() method

function sortEmojisSimple() {

    let sortedEmojis = concatEmoji.sort();

    let joinSorted = sortedEmojis.join('');
    if (uniqueEmojisP.textContent !== joinSorted) {
        uniqueEmojisP.textContent = joinSorted;
    }
    else { alert("Refresh the page to restart!") }

}


// Note: you can press either sort button after the filter button and vice versa
// but you cannot press any button two times in a row; alert will appear to refresh the page
