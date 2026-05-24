{
    let n = 5
    
    for (let i = 1; i <= n; i++) 
    {
        let str = ""
    
        for (let j = 1; j <= n; j++) 
        {
            // str += "* "
    
            if(i == 1 || i == n || j == 1 || j == n || i == j || i + j == n + 1 )
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

// ==========================
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
    
        for(let k = 1; k <= star ; k++)
        {
            // str += "* "
    
            if(i == n || k == 1 || k == star)
            {
                str += "* "
            }
            else
            {
                str += "  "
            }
            
        }
        console.log(str)
        star += 2
        ss--
    }
}
// ============================
{
    let n = 5

    let star = 2 * n - 1
    let ss = 0

    for(let i = 1; i <= n; i++)
    {
        let str = ""

        for(let k = 1; k <= ss; k++)
        {
            str += "  "
        }

        for(let j = 1; j <= star; j++)
        {
            // str += "* "

            if(i == 1 || j == 1 || j == star)
            {
                str += "* "
            }
            else
            {
                str += "  "
            }
        }

        console.log(str)
        star -= 2
        ss++
    }
}

// ============================
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
            // str += "* "
            if(i == 1 || i == n || k == 1 || k == star)
            {
                str += "* "
            }
            else
            {
                str += "  "
            }
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
// ========================
{
    let n = 7

    let ss = n / 2
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
            // str += "* "
            if(i == 1 || k == 1 || k == star)
            {
                str += "* "
            }
            else
            {
                str += "  "
            }
        }
        console.log(str)
        if(i < n / 2)
        {
            ss--
            star += 2
        }
        else
        {
            ss++
            star -= 2
        }
    }
}
// ================================
{
  let n = 3

  let ss = n - 1
  let star = 1

  for(let i = 1; i <= n; i++)
  {
    let str = ""

    for(let j = 1; j <= ss; j++)
    {
      str += " "
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
// ================================
{
    let n = 5
    let ss = n / 2
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
		if(i < n / 2)
		{
			ss--
			star += 2
		}
		else
		{
			ss++
			star -= 2
		}
	}

}