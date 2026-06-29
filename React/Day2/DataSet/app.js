const h1 = document.getElementById("h1")
const img = document.getElementById("img")

h1.addEventListener("click", () => {
    img.src = img.dataset.scr
})

