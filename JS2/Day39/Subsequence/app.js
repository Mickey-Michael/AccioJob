{
    function Subsequence(arr,idx,ans)
    {
        if(idx == arr.length)
        {
            console.log(ans)
            return 
        }
    
        ans.push(arr[idx])
        Subsequence(arr,idx + 1,ans)
        ans.pop()
        Subsequence(arr,idx + 1, ans)
    }

    Subsequence([1,2,3,4],0,[])
}

//========================

{
    function Subsequence(str,idx,ans)
    {
        if(idx == str.length)
        {
            console.log(ans)
            return
        }
    
        Subsequence(str,idx + 1,ans + str[idx])
        Subsequence(str,idx + 1, ans)
    }

    Subsequence("abc",0,"")
}

//=======================

