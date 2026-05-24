const lightbtn = document.getElementById("light")
const darkbtn = document.getElementById("dark")
const main = document.getElementById("main1")


lightbtn.addEventListener("click", () => {
    main.style.backgroundColor= "white"
    main.style.color="black"
})


darkbtn.addEventListener("click", () => {
    main.style.backgroundColor= "black"
    main.style.color="white"
})