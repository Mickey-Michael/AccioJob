{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        for(let j = 1; j <= i; j++)
        {
            str += "*"
        }
        console.log(str)
    }
}

//=====================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        for(let j = 1; j <= i; j++)
        {
            str += j
        }
        console.log(str)
    }
}

// ======================
{
    let n = 4

    for(let i = n; i >= 1; i--)
    {
        let str = ""
        for(let j = 1; j <= i; j++)
        {
            str += "*"
        }
        console.log(str)
    }
}
// ===================
{
    let n = 4
    let s = n -1
    let star = 1

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        for(let j = 1; j <= s; j++)
        {
            str += " "
        }
        for(let k = 1; k <= star; k++)
        {
            str += "*"
        }
        s--
        star += 2

        console.log(str)
    }
}
// =====================
{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            str += i
        }
        console.log(str)
    }
}
// ==================
{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        for(let j = i; j >= 1; j--)
        {
            str += j
        }
        console.log(str)
    }
}
// ====================
{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        
        for(let j = 1; j <= i; j++)
        {
            str += j
        }
        console.log(str)
    }
    for(let i = n -1; i >= 1; i--)
    {
        let  str = ""
        for(let j = 1; j <= i; j++)
        {
            str += j
        }
        console.log(str)
    }
}
// =============================================

{
    let n = 4
    let s = n -1 
    let star = 1

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= s; j++)
        {
            str += " "
        }
        for(let k = 1; k <= star; k++)
        {
            str += "*"
        }
        s--
        star++
        console.log(str)
    }
    let s1 = 1
    let star1 = n -1
    for(let i = n - 1; i >= 1; i--)
    {
        let str = ""

        for(let j = 1; j <= s1; j++)
        {
            str += " "
        }
        for(let k = 1; k <= star1; k++)
        {
            str += "*"
        }
        s1++
        star1--
        console.log(str)
    }
}
// ==========================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""
        
        for(let j = 1; j <= i; j++)
        {
            str += "*"
        }
        console.log(str)
    }
    for(let i = n -1; i >= 1; i--)
    {
        let  str = ""
        for(let j = 1; j <= i; j++)
        {
            str += "*"
        }
        console.log(str)
    }
}

//========================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            str += j
        }
        for(let k = i; k > 1; k--)
        {
            str += k - 1
        }
        console.log(str)
    }
}

//=======================
{
    let n = 5

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= n - i; j++)
        {
            str += " "
        }
        for(let k = 1; k <= i; k++)
        {
            str += "*"
        }
        console.log(str)
    }
    for(let i = 1; i <= n - 1; i++)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            str += " "
        }
        for(let k = 1; k <= n - i; k++)
        {
            str += "*"
        }
        console.log(str)
    }

}

//==========================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            str += i
        }
        
        console.log(str)
    }
    for(let i = n - 1; i >= 1; i--)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            str += i
        }
        
        console.log(str)
    }
}

//=========================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <=  n - i; j++)
        {
            str += "  "
        }
        for(let k = 1; k <= i; k++)
        {
            str += k + " "
        }
        for(let l = i - 1; l >= 1; l--)
        {
            str += l + " "
        }
        console.log(str)
    }
    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= i; j++)
        {
            str += "  "
        }
        for(let k = 1; k <= n - i; k++)
        {
            str += k + " "
        }
        for(let l = n - i; l > 1; l--)
        {
            str += l + " "
        }
        console.log(str)
    }
}

//=====================

{
    let n = 4

    for(let i = 1; i <= n ; i++)
    {
        let str = ""

        for(let j = 1; j <= n; j++)
        {
            if(i == n || i == 1 || j == n || j == 1)
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

//======================

{
    let n = 4

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let j = 1; j <= i ; j++)
        {
            if((i + j) % 2 == 0)
            {
                str += "1"
            }
            else
            {
                str += "0"
            }
             
        }
        console.log(str)
    }
}




