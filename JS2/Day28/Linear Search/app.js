let arr = [3,1,-10,0,77,66,5]
let terget = 66

let ans = -1

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == terget)
    {
        ans = i
    }
}
console.log(ans)
