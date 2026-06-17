const btn = document.getElementById("btn")
const img = document.getElementById("img")

const api = "https://dog.ceo/api/breeds/image/random"

window.addEventListener("load", async () => {
    const res = await fetch(api)
    const data = await res.json()

    img.src = data.message
})

btn.addEventListener("click", async () => {
    const res = await fetch(api)
    const data = await res.json()
   
    const img2 = document.createElement("img")
    img2.src = data.message
    img2.style.width = "500px"
    img2.style.height = "500px"
    document.body.append(img2)
})

