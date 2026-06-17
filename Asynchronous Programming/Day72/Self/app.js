const btn = document.getElementById("btn")
const img = document.getElementById("img")
const body = document.getElementById("body")


const api = "https://dog.ceo/api/breeds/image/random"

window.addEventListener("load" ,() => {
    fetch(api)
    .then((res) => {
        return res.json()
    })
    .then((data) => {

        img.src = data.message
    })
})

btn.addEventListener("click", () => {
    fetch(api)
    .then((res) => {
        return res.json()
    })
    .then((data) => {

        const img2 = document.createElement("img")
        img2.src = data.message

        img2.style.width = "500px"
        img2.style.height = "500px"

        body.append(img2)
    })
})
