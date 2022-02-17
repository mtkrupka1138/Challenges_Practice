document.getElementById("btn").addEventListener("click", filterDuplicates)

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
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

let emojiArr = allEmojisP.textContent.split('');
let concatEmoji = [];
for (let j = 1; j < emojiArr.length; j++) {
    if ( !(j%2===0) ) {
        let emojiConcat = emojiArr[j-1].concat(emojiArr[j])
            concatEmoji.push(emojiConcat)
        }
    }

let uniqueEmoji = [];

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
