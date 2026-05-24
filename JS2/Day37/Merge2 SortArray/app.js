function merge(a1, a2)
{
    let ans = []
    let i = 0
    let j = 0
    
    while(i < a1.length && j < a2.length)
    {
        if(a1[i] <= a2[j])
        {
            ans.push(a1[i])
            i++
        }
        else
        {
            ans.push(a2[j])
            j++
        }
    }
    
    while(i < a1.length)
    {
        ans.push(a1[i])
        i++
    }
    while(j < a2.length)
    {
        ans.push(a2[j])
        j++
    }
    
    return ans
}

console.log(merge([1,7,37,42,56],[3,4,5,10]))