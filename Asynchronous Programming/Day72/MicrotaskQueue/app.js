console.log("Stert")

setTimeout(() => {
    console.log("Mickey")
},2000)

new Promise((reslove , reject) => {
    reslove("Mickey Michael")
})
.then((data) => {
    console.log(data)
})

console.log("End")

