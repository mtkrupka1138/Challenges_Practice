// Event listeners for button clicks

document.getElementById("btn-filter").addEventListener("click", filterDuplicates)
document.getElementById("btn-sort").addEventListener("click", sortEmojis)


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

const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

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


// Function to find/filter duplicates

function filterDuplicates() {

    for (let i = 0; i < concatEmoji.length; i++) {
        let prevArr = uniqueEmoji.slice();
        if (!prevArr.includes(concatEmoji[i])) {
            uniqueEmoji.push(concatEmoji[i]);
        }
    }
    let joinUnique = uniqueEmoji.join('');
    if (uniqueEmojisP.textContent !== joinUnique) {
        uniqueEmojisP.textContent = joinUnique;
    }
    else { alert("Refresh the page to restart!") }
    
}


// Function to sort by emoji type (used simplest solution that does not consider original order)

function sortEmojis() {

    let sortedEmojis = concatEmoji.sort();

    let joinUnique = sortedEmojis.join('');
    if (uniqueEmojisP.textContent !== joinUnique) {
        uniqueEmojisP.textContent = joinUnique;
    }
    else { alert("Refresh the page to restart!") }

}


// Note: you can press the sort button after the filter button and vice versa
// but you cannot press either one two times in a row; alert will appear to refresh the page
