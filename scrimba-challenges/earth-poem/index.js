// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
    color1: "green",
    color2: "blue",
    planet: "Earth",
    adjective: "clean",
    emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
    sentence: function() {
        let poem = `Forests are ${this.color1}, oceans are ${obj.color2}. Keep the ${this.planet} ${this.emojis[1]} clean, for me and you.`;
        return poem;
    }
}

let copy = obj;
obj.color2 = "purple";

let poemPara = document.getElementById("poem");
let keys = Object.values(obj).slice(0,2);


document.getElementById("poem").innerHTML = obj.sentence();

for (j = 0; j < keys.length; j++) {
    poemPara.innerHTML = poemPara.innerHTML.replace( new RegExp("\\b"+keys[j]+"\\b","g"),`<span style=color:${keys[j]}>${keys[j]}</span>`)
  }

  
  
  
  
  
  