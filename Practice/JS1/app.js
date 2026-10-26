const h1 = document.getElementById("h1")
const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
const minus = document.getElementById("minus")
const ta = document.getElementById("ta")
const span = document.getElementById("span")
const input = document.getElementById("input")
const ul = document.getElementById("ul")
const btn = document.getElementById("btn")
const thead = document.getElementById("head")
const tbody = document.getElementById("body")
const main = document.getElementById("main")
const ii = document.getElementById("ii")
const show = document.getElementById("show")
const list = document.getElementById("list")



const products = [
    { id: 1, name: "iPhone", price: 70000 },
    { id: 2, name: "Samsung", price: 50000 },
    { id: 3, name: "OnePlus", price: 40000 },
    { id: 4, name: "Redmi", price: 15000 }
]


let count = 0

plus.addEventListener("click", () => {
    count++
    h1.innerText = count

})
reset.addEventListener("click", () => {
    count = 0
    h1.innerText = count

})
minus.addEventListener("click", () => {
    count--
    h1.innerText = count

})

ta.addEventListener("input", (e) => {
    let a = e.target.value
    span.innerText = `${a.length}/20` 
})

btn.addEventListener("click", () => {
    const li = document.createElement("li")
    const inp = document.createElement("input")
    const p = document.createElement("p")
    const bt = document.createElement("button")

    inp.type = "checkbox"
    bt.innerText = "Delete"

    inp.addEventListener("input", (e) => {
        if(e.target.checked)
        {
            p.innerText = "Completed"
        }
        else
        {
            p.innerText = "Pending"
        }
    })

    bt.addEventListener("click", () => {
        bt.parentElement.remove()
    })

    li.innerText = input.value

    li.append(inp,bt,p)
    ul.append(li)
})


const getdata = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok)
        {
            throw new Error("Server Error")
        }
        const data = await res.json()
        if(data.length == 0)
        {
            const hh = document.createElement("h1")
            hh.innerText = "Loading..."
            main.append(hh)
            return
        }
        for (const item of data) 
        {
            const tdid = document.createElement("td")
            tdid.innerText = item.id
            const tdname = document.createElement("td")
            tdname.innerText = item.name
            const tdemail = document.createElement("td")
            tdemail.innerText = item.email
            const tdphone = document.createElement("td")
            tdphone.innerText = item.phone

            tbody.append(tdid,tdname,tdemail,tdphone)
        }
    } catch (error) {
        console.log(error.message)
    }
}
getdata()


ii.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()

    const filtered = products.filter(item =>
        item.name.toLowerCase().includes(value)
    )

    filtered.forEach(item => {
        const p = document.createElement("p")
        p.innerText = `${item.name} - ₹${item.price}`
        show.append(p)
    })
})


