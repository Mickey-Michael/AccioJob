//  Map =======================


let arr = [1,2,3,4,5,6,7,8]

let ans = arr.map((item ) => {
    return item ** 2
})

console.log(ans)

//====================
{
    let arr = ["hello","world"]

    let ans = arr.map((item) => {
        return item.toUpperCase()
    })

    console.log(ans)
}

{
    let arr = [10,20,30]

    let ans = arr.map((item ) => {
        return item + 5
    })
    console.log(ans)
}

//=====================

{
    let arr = ["apple","banana","mango"]

    let ans = arr.map((item) => {
        return item.length
    })

    console.log(ans)
}

//=====================
{
    let arr = [
        {name: "Shubham", age: 25},
        {name: "Aman", age: 22},
        {name: "Rahul", age: 24}
    ]

    let ans = arr.map((item) => {
        return item.name
    })
    console.log(ans)
}

//=========================

{
    let arr = [
        {name: "Aman", age: 17},
        {name: "Rahul", age: 21}
    ]

    let ans = arr.map((item) => {
        return {
            ...item,
            isAdult : item.age >= 18
        }
    })

    console.log(ans)
}

//=======================

{
    let arr = [
        {first: "Shubham",last: "Kasyap"},
        {first: "Mickey",last: "Singh"}
    ]

    let ans = arr.map((item) =>{
        return item.first + " " + item.last
    })

    console.log(ans)
}

//=====================
{
    let arr = [1,2,3,4]

    let ans = arr.map((item) =>{
        return item % 2 == 0 ? "even" : "odd"
    })
    console.log(ans)
}

//==========================

{
    let arr = [0,10,20]

    let ans = arr.map((item) => {
        return (item * 9/5) + 32
    })
    console.log(ans)
}


// Filter =======================

{
    let arr = [1,2,3,4,5,6,7,8,9]

    let ans = arr.filter((item) =>{
        // return item % 2 == 0
        return item % 2 != 0
    })
    console.log(ans)
}

//===========================

{
    let arr = [5,12,8,20,3]

    let ans = arr.filter((item) =>{
        return item > 10
    })

    console.log(ans)
}

//==============================

{
    let arr = [
        {name: "Shubham", age: 16},
        {name: "Aman", age: 22},
        {name: "Rahul", age: 24}
    ]

    let ans = arr.filter((item) => {
        return item.age > 18
    })
    console.log(ans)
}

//============================

{
    let arr = [
        {task: "study", done: true},
        {task: "Workout", done: false},
        {task: "Code", done: true}
    ]

    let ans = arr.filter((item) => {
        return item.done
    })
    console.log(ans)
}

//=========================

{
    let arr = [
        {email:"a@gmail.com"},
        {email:"b@yahoo.com"},
        {email:"c@gmail.com"}
    ]

    let ans = arr.filter((item) =>{
        return item.email.includes("gmail")
    })
    console.log(ans)
}

//========================
{
    let arr = ["a","b","c","d","e","f"]

    let ans = arr.filter((item , index) => {
        return index % 2 == 0
    })
    console.log(ans)
}