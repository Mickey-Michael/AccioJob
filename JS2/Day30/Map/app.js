{
    let mymap = new Map()

    mymap.set("name" , "mickey")
    mymap.set("name2", "sapna")

    // mymap.delete("name")
    // mymap.clear()    

    for (const [key, value] of mymap) 
    {
        console.log(key,value)
    }

    let itret = mymap.entries()

    for (const item of itret) 
    {
        console.log(item[0],item[1])
    }

    mymap.forEach((value , key) => {
        console.log(key, value)
    })

    console.log(mymap.get("name2"))
    console.log(mymap.has("name"))

    console.log(mymap)
}

//========================

{
    let str = "mynameisjavascript"

    let map = new Map()

    for (const item of str) 
    {
        if(map.has(item))
        {
            map.set(item , map.get(item) + 1)
        }
        else
        {
            map.set(item, 1)
        }
    }

    console.log(map)
}

//=========================

{
    let arr = [1,2,3,1,2,1,1,0]

    let map = new Map()

    for (const item of arr) 
    {
        if(map.has(item))
        {
            map.set(item, map.get(item) + 1)
        }
        else
        {
            map.set(item , 1)
        }
    }
    console.log(map)
}

//==========================

{
   let arr = [2,11,15,7]
   let terget = 9

   let map = new Map()

   for(let i = 0; i < arr.length; i++)
   {
    if(map.has(terget - arr[i]))
    {
        console.log(map.get(terget - arr[i]), i )
    }
    else
    {
        map.set(arr[i], i)
    }
   }
}