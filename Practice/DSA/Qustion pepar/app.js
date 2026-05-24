{
    let n = 5

    for(let i = 1; i < n; i ++)
    {
        let str = ""
    
        for(let j = 1; j <= i; j++)
        {
            str += j + " "
        }
        console.log(str)
    }
}

// ===========================

{
    let arr = [1,2,3,4]

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[i] != arr[j])
            {
                console.log(arr[i],arr[j])
            }
            
        }
    }
}

// ========================
{
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    

    for(let i = 0; i < arr.length; i++)
    {
        let sum = 0

        for(let j = 0; j < arr.length; j++)
        {
            sum += arr[i][j]
        }
        console.log(sum)
    }
}

// ==========================

{
    let arr = [1,2,3,4,5,6]

    let terget = 5

    let ans = -1

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == terget)
        {
            ans = i
            break
        }
    }
    console.log(ans)
}

// =======================
{
    let arr = [1,2,2,3,3,3]

    let mySet = new Set(arr)
    console.log(mySet)
}

// =====================

{
    let arr = [10,2,5]
    
    arr.sort((a , b) => b - a)

    console.log(arr)
}

// ======================

{
    // let arr = [1,2,3,4,5,6]

    // arr.find()
}

// ===================

{
    let arr = [1,2,3,4]

    let ans = arr.map(x => x * x)

    console.log(ans)
}

// ====================

{
    let arr = ["a","b","c"]

    let ans = arr.map(x => x.toUpperCase())

    console.log(ans)
}

// ==================
{
    let arr = [1,2,3,4,5,6]

    let ans = arr.filter(x => x % 2 == 0)

    console.log(ans)
}
// ==================

{
    let arr = ["hi","hello","sun","world"]

    let ans = arr.filter(x => x.length > 3)

    console.log(ans)
}

// =======================

{
    let arr = [1,2,3,4]

    let ans = arr.reduce((a , b) => a  +  b)

    console.log(ans)
}

// ==================

{
    let arr = [10,20,30]

    let ans = arr.find(10)

    console.log(ans)
}