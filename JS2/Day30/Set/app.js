{
    let myset = new Set()

    myset.add(1)
    myset.add(2)
    myset.add(3)
    myset.add(4)
    myset.add(5)

    myset.add("qwerty")
    // myset.add("qwerty")
    

    console.log(myset)
}

//=========================

{
    let arr = [1,3,2,3,3,7,5,33,]

    let myset = new Set(arr)
    myset.delete(33)
    // myset.clear()

    let something = myset.entries()

    // for(let item of something)
    // {
    //     console.log(item)
    // }
    console.log(something)
    console.log(myset)

    let arr1 = Array.from(myset)
    console.log(arr1)
}

//=============================

{
    let arr = [1,2,3,4,4]
    
    let myset = Array.from(new Set(arr))


    console.log(myset)
}

//=======================

{
    let arr = [1,2,3,4,4]

    let myset = new Set(arr)

    console.log(arr.length != myset.size)
}

//======================

{
    let arr = [1,2,2,3,3,4]

    let myset = new Set(arr)

    console.log(myset.size)
}

//=========================

{
    let arr = [1,2,2,1]  
    let arr1 = [2,2]

    let myset = new Set(arr)
    let ansset = new Set()

    for (const item of arr1) 
    {
        if(myset.has(item))
        {
            ansset.add(item)
        }
    }
    console.log(Array.from(ansset))
}

//==========================

{
    let arr = [1,2]
    let arr1 = [2,3]

    let set = new Set([...arr,...arr1])

    console.log(Array.from(set))
}

//=====================

{
    let arr = [1,2,3]
    let arr1 = [2,4]

    let set = new Set(arr)

    for (const item of arr1) 
    {
        if(set.has(item))
        {
            set.delete(item)
        }
    }
    console.log(Array.from(set))
}

//=====================

{
    let arr = [1,2,3]
    let arr1 = [2,3,4]

    let set = new Set(arr)

    for (const item of arr1) 
    {
        if(set.has(item))
        {
            set.delete(item)
        }
        else
        {
            set.add(item)
        }
    }
    console.log(Array.from(set))
}

//=========================

