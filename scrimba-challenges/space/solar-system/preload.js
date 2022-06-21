

for (let i = 0; i<10; i++) {
    let solarSystemDivs = document.getElementById("solarSystem");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${i}`);
    newDiv.style.height = `${i}00px`;
    newDiv.style.width = `${i}00px`;
    newDiv.style.borderRadius = `${i}00px`;
    newDiv.style.borderColor = "#fff";
    document.getElementById("solarSystem").appendChild(newDiv);
}