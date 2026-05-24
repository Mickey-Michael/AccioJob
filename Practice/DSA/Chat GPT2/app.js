//=========================Q1
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
    
    for(let i = n -1; i > 0; i--)
    {
        let str = ""
    
        for(let j = 1; j <= i; j++)
        {
            str += j + " "
        }
        console.log(str)
    }
}

//=================Q2
{
    let n = 7
    let s = n / 2
    let star = 1

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= s; j++)
        {
            str += " "
        }

        for(let k = 1; k <= star;k++)
        {
            str += "*"
        }

        if(i < 4)
        {
            s--
            star += 2
        }
        else
        {
            s++
            star -= 2
        }
        console.log(str)
    }
}

//====================Q3

{
    let arr = [1,2,3]

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i; j < arr.length; j++)
        {
            let temp = []

            for(let k = i; k <= j; k++)
            {
                temp.push(arr[k])
            }
            console.log(temp)
        }
    }
}

//==================Q4

{
    let str = "abc"

    for(let i = 0; i < str.length; i++)
    {
        let temp = ""

        for(let j = i; j < str.length; j++)
        {
            temp += str[j] 
            console.log(temp)
        }
    }
}
//==================Q6

{
        let arr = [2,7,11,15]
        let terget = 9

        let ans = []

        for(let i = 0; i < arr.length; i++)
        {
            if((arr[i] + arr[i + 1]) == terget)
            {
                ans.push(i , i + 1)
                break
            }
            else
            {
                ans.push(-1,-1)
            }
        }
        console.log(ans)
}

//====================Q8

{
    function merge(arr,arr2)
    {
        let i = 0
        let j = 0
        let ans = []
    
        while(i < arr.length && j < arr2.length)
        {
            if(arr[i] <= arr2[j])
            {
                ans.push(arr[i])
                i++
            }
            else
            {
                ans.push(arr2[j])
                j++
            }
        }
        while(i < arr.length)
        {
            ans.push(arr[i])
            i++
        }
        while(j < arr2.length)
        {
            ans.push(arr2[j])
            j++
        }

        return ans
    }

    function mergeSort(arr)
    {

        if(arr.length == 0 || arr.length == 1)
        {
            return arr
        }

        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0,mid))
        let right = mergeSort(arr.slice(mid))

        return merge(left,right)
    }

    console.log(mergeSort([2,5,1,-5,8,-10,5]))
}

//======================Q9

{
    function print(n , p)
    {
        if(p == 0)
        {
            return 1
        }

        return n * print(n, p - 1)
    }
    console.log(print(2,5))
}

//======================Q10

{
    function maxarr(arr, i)
    {
        if(i == arr.length - 1)
        {
            return arr[i]
        }
        return Math.max(arr[i], maxarr(arr, i + 1))
    }

    console.log(maxarr([3,7,2,9,5], 0))
}

//================Q11

{
    let arr = [-2,3,-4,5,-1]

    let ans = arr.filter(x => x < 0).map(x => x * 2 ).reduce((a,b) => a + b)

    console.log(ans)
}