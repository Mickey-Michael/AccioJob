{
    let n = 5

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


// ===========================
{
    let arr = [      
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    for(let i = 0; i < arr.length; i++)
    {
        let ans = 0
        
        for(let j = 0; j < arr.length; j++)
        {
            ans += arr[j][i]
        }
        console.log(ans)
    }
}

// =======================
{
    function bb(arr , t){ 
        let l = 0
        let r = arr.length - 1

        while(l <= r)
        {
            let mid = Math.floor((l + r) / 2)

            if(arr[mid] == t) return mid
            else if(arr[mid] < t) l = mid + 1
            else  r = mid - 1
            
        }
        return -1
    }      

    console.log(bb([1,2,3,4,5,6,7,8,9] , 7)) 
}

// =======================
{
    function digitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

let arr = [23,14,5,32,41];

arr.sort((a, b) => digitSum(a) - digitSum(b));

console.log(arr);
}


// ==============================

{
    function s (arr , i , ans )
    {
        if(i == arr.length)
        {
            console.log(ans)
            return
        }
        ans.push(arr[i])
        s(arr, i + 1, ans)

        ans.pop()
        s(arr, i + 1,ans)
    }
    s([1,2],0,[])
}