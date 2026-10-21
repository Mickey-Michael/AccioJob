const input = document.getElementById("input")
const p = document.getElementById("p")


input.addEventListener("input", (e) => {
    p.innerText = `${e.target.textLength}/20`

})
