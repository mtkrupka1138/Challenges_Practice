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
let uniqueEmoji = [];

function filterDuplicates() {
    for (let i = 0; i < emojiArr.length; i++) {
        if (emojiArr[i] === emojiArr[0]) {
            uniqueEmoji.push(emojiArr[i]);
            console.log(emojiArr[i]);
        }
        else {
            let prevArr = emojiArr.slice(0, i);
            if (!prevArr.includes(emojiArr[i])) {
                uniqueEmoji.push(emojiArr[i]);
                console.log(emojiArr[i]);
            }
        }
    }
    let joinUnique = uniqueEmoji.join('');
    return joinUnique;
}
