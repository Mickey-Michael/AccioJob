const btnm = document.getElementById("minus")
const btnr = document.getElementById("rest")
const btnp = document.getElementById("plus")
const countbar = document.getElementById("count")

var no = 0

btnp.addEventListener("click" , () => {
    countbar.innerText = Number(no++)
})

btnm.addEventListener("click" , () => {
    countbar.innerText = Number(no--)
})

btnr.addEventListener("click" , () => {
    countbar.innerText = Number(no = 0)
})

