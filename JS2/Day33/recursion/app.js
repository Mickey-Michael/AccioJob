{ 
   function print(i, n)
   {
       if(i > n)
       {
           return
       }
       console.log(i)
       print(i + 1, n)
   }
   print(1, 10)
}

//======================

{
    function aa(i, n) 
    {
        if(i > n)
        {
            return
        }
        aa(i + 1, n)
        console.log(i)
    }
    aa(1, 10)
}

//=====================


// function ispalindrom(arr , s , e) 
// {
//     if(s >= e) return 1
//     if(arr[s] != arr[e]) return 0

//     return ispalindrom(arr , s + 1 , e - 1)
// }

// ispalindrom([1,2,3,2,1],)




