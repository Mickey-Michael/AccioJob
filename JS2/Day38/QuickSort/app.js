{
    function QuickSort(arr)
    {
        if(arr.length == 0 || arr.length == 1)
        {
            return arr
        }
    
        let pivet = arr[arr.length - 1]
        let left = []
        let right = []
    
        for(let i = 0; i < arr.length - 1; i++)
        {
            if(arr[i] <= pivet)
            {
                left.push(arr[i])
            }
            else
            {
                right.push(arr[i])
            }
        }
    
        let sortleft = QuickSort(left)
        let sortright = QuickSort(right)
    
        return [...sortleft, pivet, ...sortright]
    }
    
    console.log(QuickSort([2,4,7,2,9,4,7,4]))
}

//========================

{
    function QuickSort(arr)
    {
        if(arr.length == 0 || arr.length == 1)
        {
            return arr
        }

        let pivetidx = Math.floor(Math.random() * arr.length)
    
        let pivet = arr[pivetidx]
        let left = []
        let right = []
    
        for(let i = 0; i < arr.length; i++)
        {
            if(i == pivetidx) continue
            if(arr[i] <= pivet)
            {
                left.push(arr[i])
            }
            else
            {
                right.push(arr[i])
            }
        }
    
        let sortleft = QuickSort(left)
        let sortright = QuickSort(right)
    
        return [...sortleft, pivet, ...sortright]
    }
    
    console.log(QuickSort([2,4,7,2,9,4,7,4]))
}