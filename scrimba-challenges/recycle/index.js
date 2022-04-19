const recycleBtn = document.getElementById("recycle-btn")
const emptyBin = document.getElementById("empty-btn")
recycleBtn.addEventListener("click", recycle)
emptyBin.addEventListener("click", empty)
const recycleSelect = document.getElementById("recycle-select")
const recycleBin = document.getElementById("recycle-bin")
const infoParagraph = document.getElementById("info-paragraph")

let count = 0;

function recycle() {
    let itemToRecycle = recycleSelect.value;

    if (count < 10) {
        recycleBin.innerHTML += itemToRecycle;
        count += 1;
    }
    else {alert("You must empty the recycle bin!")}
    
}

function empty() {
    recycleBin.innerHTML = '';
    count = 0;
}




// stretch goal 3️⃣: Animate adding the items to the bin.