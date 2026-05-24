// Some ===========================

{
    let arr = [-1,3,5,7,2]

    let ans = arr.some((item) => {
        return item % 2 == 0
    })
    console.log(ans)
}

//==========================

{
    let arr = [
        {name: "A", age: 22},
        {name: "B", age: 17},
        {name: "C", age: 19}
    ]

    let ans = arr.some((item) => {
        return item.age < 18
    })
    console.log(ans)
}

//===========================

{
    let arr = [
        {name: "iphone", stock: 5},
        {name: "laptop", stock: 0},
        {name: "computer", stock: 3}
    ]

    let ans = arr.some((item) =>{
        return item.stock == 0
    })
    console.log(ans)
}

//======================

{
    let arr = [
        {name: "A", marks: [70,80,60]},
        {name: "B", marks: [88,92,79]},
        {name: "C", marks: [50,60,65]}
    ]

    let ans = arr.some((item) => {
        return item.marks.some((val) => {
            return val > 90
        })
    })

    console.log(ans)
}

//======================

{
    let arr = [
        {category: "A", items: [10,20,30]},
        {category: "B", items: [5,15,25]}
    ]

    let ans = arr.some((item) => {
        return item.items.some((val) => {
            return val > 25
        })
    })

    console.log(ans)
}

// Every ========================

{
    let arr = [-1,1,3,5,7,9,2]

    let ans = arr.every((item) => {
        return item % 2 == 0
    })

    console.log(ans)
}

//======================

{
    let arr = [
        {name: "A", marks: [70,80,60]},
        {name: "B", marks: [88,92,79]},
        {name: "C", marks: [50,60,65]}
    ]

    let ans = arr.every((iten) => {
        return iten.marks.every((val) => {
            return val >= 40
        })
    })

    console.log(ans)
}

//============================

{
    let arr = [
        {name: "A", age: 22},
        {name: "B", age: 17},
        {name: "C", age: 19}
    ]

    let ans = arr.filter(item => item.age > 18).map(item => item.name)
    
    console.log(ans)
}

//=======================

{
    let arr = [
        {name: "A", hobbies: ["coding", "coding"]},
        {name: "B", hobbies: ["coding", "music"]},
        {name: "C", hobbies: ["coding", "coding"]}
    ]

    let ans = arr.filter((item) => {
        return item.hobbies.filter(val => val = "coding")
    })

    console.log(ans)
}