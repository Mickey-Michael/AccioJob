{
   let arr = [[1,2,3], [4,5,6], [7,8,9]]
   
   for (let item of arr) 
   {
       for(let num of item)
       {
           console.log(num)
       }   
   }
}

//========================
{
   let arr = [[1,2], [4,5,6,4,67], [7,8,9,23]]

   for (let i = 0; i < arr.length; i++) 
   {
    for (let j = 0; j < arr.length; j++)
    {
        console.log(arr[i][j])
    }
   }
}

// =========================

// {
//     let size = Number(prompt("Enter Any Number"))
//     let arr = []

//     for(let i = 0; i < size; i++)
//     {
//         arr.push(Number(prompt(`Enter ${i + 1} Number`)))

//     }
//     console.log(arr)
// }

// ========================

// {
//     let row = Number(prompt("Enter Number of Rows"))
//     // let Cols = Number(prompt("Enter Number of Cols"))

//     let arr = []

//     for(let i = 0; i < row; i++)
//     {
//         let Cols = Number(prompt("Enter Number of Cols"))
//         let inner = []

//         for(let j= 0; j < Cols; j++)
//         {
//             inner.push(Number(prompt(`Enter row : ${i}, col : ${j} element`)))
//         }
//         arr.push(inner)
//     }

//     console.log(arr)
// }

// ==========================

{
    let arr = [
        [23,6,3,743 ],
        [243,87,32,9065],
        [23,65,9854,21]
    ]

    let max = -Infinity
    let min = Infinity

    for(let item of arr)
    {

        for(let val of item)
        {
            if(val > max)
            {
                max = val
            }
            if(val < min)
            {
                min = val
            }
        }
    }
    console.log(max , min)
}

// ===============================

{
    let arr = [1,2,3,4,5,6,7,8,9]

    // let ans = []

    // for(let i = arr.length - 1; i >= 0; i--)
    // {
    //     ans.push(arr[i])
    // }
    // console.log(ans)

    let s = 0
    let e = arr.length - 1

    while(s < e)
    {
        let temp = arr[s]
        arr[s] = arr[e]
        arr[e] = temp

        s++
        e--
    }
    console.log(arr)
}

// ========================

{
    let arr = [[1,2,3],[4,5,6],[7,8,9]]

    for(let item of arr)
    {
        let s = 0
        let e = item.length - 1

        while(s < e)
        {
            let temp = item[s]
            item[s] = item[e]
            item[e] = temp

            s++
            e--
        }
    }
    console.log(arr)
}
























