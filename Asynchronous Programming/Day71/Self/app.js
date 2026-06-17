const main = document.getElementById("main")

const api = " https://hp-api.onrender.com/api/characters"

fetch(api)
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data)

    for(let item of data)
    {
        const card = document.createElement("article")

        const img = document.createElement("img")
        img.src = item.image || "./man.png"

        const nam = document.createElement("h3")
        nam.innerText = item.name

        img.style.width = "300px"
        img.style.height = "400px"
        card.style.width = "300px"
        card.style.textAlign = "center"

        card.append(img,nam)
        main.append(card)
    }
})