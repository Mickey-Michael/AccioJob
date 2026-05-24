{
    let arr = [1,3,6,9,11,14,15,17,19]
    let t = 17

    let l = 0
    let r = arr.length - 1
    
    let ans = -1
    
    while(l <= r)
    {
        let mid = Math.floor((l + r) / 2)
    
        if(arr[mid] === t) ans = mid
    
        if(arr[mid] < t) l = mid + 1
        else r = mid - 1
    }
    
    console.log(ans)
}

//====================

{
    let arr = [8,7,6,5,4,3,2,1,-10]
    let t = 1

    let l = 0
    let r = arr.length - 1
    let ans = -1

    while(l <= r)
    {
        let mid = Math.floor((l + r) / 2)

        if(arr[mid] == t) ans = mid

        if(arr[mid] > t) l = mid + 1
        else r = mid - 1
    }
    console.log(ans)
}