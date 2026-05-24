// {
//     let n = Number(prompt("Enter Your Number"))

//     for(let i = 1; i <= 10; i ++)
//     {
    
//         console.log(`${n} X ${i} = ${n * i}`)
//     }
// }

{
    let n = 5
    let str = ""

    for(let i = 1; i <= n; i++)
    {
        str += "* "
    }
    console.log(str)

}
// ================================
// {
//     let start = Number(prompt("Entrt Start Number"))
//     let End = Number(prompt("Entrt End Number"))


//     for(let i = start; i <= End; i++)
//     {
//         for(let j = 1; j <= 10; j++)
//         {
//             console.log(`${i} X ${j} = ${i * j}`)
//         }
//     }
// }

// =================================

{
    let arr = [1,2,3,4,5]

    for(let i = 0; i < arr.length; i++)
    {
        let ans = []

        for(let j = i; j < arr.length; j++)
        {
            ans.push(arr[j])
            console.log(ans)
        }
    }
} 

// ========================

{
    let str = "qwerty"

    for(let i = 0; i < str.length; i++)
    {
        let ans = ""

        for(let j = i; j < str.length; j++)
        {
            ans += str[j]
            console.log(ans)
        }
    }
}

// ========================
{
    let n = 5

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= n; j++)
        {
            str += "* "
        }
        console.log(str)
    }
}

// ==========================

{
    let n = 5
    let m = 7

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= m; j++)
        {
            str += "* "
        }
        console.log(str)
    }
}

// =========================

{
    let n = 5

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            // str += "* "
            if(i == n || j == 1 || j == i)
            {
                str += "* "
            }
            else
            {
                str += "  "
            }
        }
        console.log(str)
    }
}

// =========================

{
    let n = 5

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = n; j >= i; j--)
        {
            str += "* "
        }
        console.log(str)
    }
} 

// ========================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= n; j++)
        {
            // str += "* "
            if(i == 1 || i == n || j == 1 || j == n)
            {
                str += "* "
            }
            else
            {
                str += "  "
            }
        }
        console.log(str)
    }
}
// =====================

{
    let n = 4

    let ss = n -1
    let star = 1

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= ss; j++)
        {
            str += "  "
        }
        for(let k = 1; k <= star; k++)
        {
            str += "* "
        }
        console.log(str)
        ss--
        star++
    }
}

// =================================
{
    let n = 5

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= n; j++)
        {
            // str += "* "
            if(i == 1 || i == n || j == 1 || j == n || i == j || j + i == n + 1)
            {
                str += "* " 
            }
            else
            {
                str += "  "
            }
        }
        console.log(str)
    }
}

// =============================

{
    let n = 5

    let ss = n - 1
    let star = 1

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= ss; j++)
        {
            str += "  "
        }
        for(let k = 1; k <= star; k++)
        {
            str += "* "
        }
        console.log(str)
        ss--
        star += 2
    }
}

// =======================

{
    let n = 5

    let ss = 0
    let star = 2 * n - 1

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= ss; j++)
        {
            str += "  "
        }
        for(let k = 1; k <= star; k++)
        {
            str += "* "
        }
        console.log(str)
        ss++
        star -= 2
    }
}

// ========================

{
    let n = 9

    let ss = 0
    let star = n 

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= ss; j++)
        {
            str += "  "
        }
        for(let k = 1; k <= star; k++)
        {
            str += "* "
        }
        console.log(str)
        if(i < n / 2)
        {
            ss++
            star -= 2
        }
        else
        {
            ss--
            star += 2
        }
        
    }
}