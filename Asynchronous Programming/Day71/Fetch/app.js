const main = document.getElementById("main")
const api = "https://dummyjson.com/products"

fetch(api)
.then((response) => {
    return response.json()
})
.then((data) => {

    for(let item of data.products)
    {
        console.log(item)
        const card = document.createElement("article")

        const image = document.createElement("img")
        image.src = item.images[0]

        const name = document.createElement("h3")
        name.innerText = item.title

        const price = document.createElement("p")
        price.innerText = item.price

        const textContainer = document.createElement("div")
        textContainer.append(name,price)

        image.style.width = "350px"
        card.style.width = "350px"
        card.style.border = "solid black 2px"
        card.style.marginLeft = "20px"
        textContainer.style.textAlign = "center"

        card.append(image, textContainer)
        main.append(card)

    }
})