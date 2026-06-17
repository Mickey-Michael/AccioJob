const p1 = new Promise((resolve, reject) => {
    let arr = [1,2,3]
    if(arr.length > 0)
    {
        resolve(arr)    
    }
    else
    {
        reject("nhi mila kush")
    }
})

console.log(p1)

const p2 = new Promise((res,rej) => {
    setTimeout(() => {
        res({Name : "Mickey"})
    },2000)
})

console.log(p2)