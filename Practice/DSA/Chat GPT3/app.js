//====================Q1
{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        for(let j = 1; j <= i; j++)
        {
            str += "* "
        }
        console.log(str)
    }
}

//===============Q2
{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        for(let j = 1; j <= i; j++)
        {
            str += j + " "
        }
        console.log(str)
    }
}

//===================Q3

{
    let arr = [1,2,3]

    for(let i = 0;i < arr.length; i++)
    {
        for(let j = i;j < arr.length; j++)
        {
            let temp = []

            for(let k = i;k <= j; k++)
            {
                temp.push(arr[k])
            }
            console.log(temp)
        }
    }
}

//===============Q4

{
    let str = "abc"

    for(let i = 0; i < str.length; i++)
    {
        let temp = ""

        for(let j = i; j < str.length; j++)
        {
            temp += str[j] + " "
            console.log(temp)
        }
    }
}

//===============Q5
{
    let arr = [2,7,11,15]
    let target = 9

    let ans = []

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] + arr[i + 1] == target)
        {
            ans.push(i, i + 1)
            break
        }
        else
        {
            ans.push(-1,-1)
        }
    }
    console.log(ans)
}

//====================Q6
{
    let arr = [5,3,8,2]

    let isSorted = true

    for(let i = 0; i < arr.length - 1; i++)
    {
        for(let j = 0; j < arr.length - 1 - i; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                isSorted = false
            }
        }
        if(isSorted == true)
        {
            break
        }
    }
    console.log(arr)
}

//===================Q7
{
    function power(base,exp)
    {
        if(exp == 0)
        {
            return 1
        }

        return base * power(base,exp - 1)
    }
    console.log(power(2,5))
}

//=====================Q8
{
    let arr = [1,2,3,4]

    let ans = arr.map(a => a * a)

    console.log(ans)
}

//====================Q9

{
    function findmax(arr, i)
    {
        if(i == arr.length - 1)
        {
            return arr[i]
        }

        return Math.max(arr[i] , findmax(arr, i + 1))
    }
    console.log(findmax([3,7,2,9,5],0))
}

//====================Q10
{
    let arr = [1,2,2,3,3,3]

    let map = new Map()

    for(let i = 0; i < arr.length; i++)
    {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }

    console.log(map)
}