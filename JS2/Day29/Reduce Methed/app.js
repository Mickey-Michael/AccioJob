{
    let arr = [1,2,3,4,5,6,7,8,9,10]
    
    let ans = arr.reduce((prev , curr) => {
        return prev + curr
    }, 0)

    console.log(ans)
}

//======================

{
    let arr = [5,1,9,3]

    let ans = arr.reduce((prev, curr) => {
        return Math.max(prev , curr)
    })

    console.log(ans)
}

//=====================
{
    let arr = [5,1,9,3]

    let ans = arr.reduce((prev, curr) => {
        return Math.min(prev , curr)
    })

    console.log(ans)
}

//============================

{
    let arr = ["a","b","c","d"]

    let ans = arr.reduce((prev) => {
        return prev + 1
    }, 0)

    console.log(ans)
}

//======================

{
    let arr = ["a","b","a","c","b","a"]

    let ans = arr.reduce((prev , curr) => {
        if(prev[curr])
        {
            prev[curr] = prev[curr] + 1
        }
        else
        {
            prev[curr] = 1
        }
        return prev
    }, {})

    console.log(ans)
}

//========================

{
    let arr = [[1,2],[3,4],[5]]

    let ans = arr.reduce((prev,curr) => {
        return [...prev, ...curr]
    })

    console.log(ans)
}

//===============================

{
    let arr = ["name", "age"]

    let ans = arr.reduce((prev , curr) => {
        prev[curr] = null
        
        return prev
    }, {})

    console.log(ans)
}

//=========================
{
    let arr = [1,2,3,4,5]

    let ans = arr.reduce((prev ,curr) => {
        if(curr % 2 == 0)
        {
            if(prev.even)
            {
                prev.even.push(curr)
            }
            else
            {
                prev.even = [curr]
            }
        }
        else
        {
            if(prev.odd)
            {
                prev.odd.push(curr)
            }
            else
            {
                prev.odd = [curr]
            }
            
        }
        return prev
    }, {
        // even : [],
        // odd : []
    })

    console.log(ans)
}


