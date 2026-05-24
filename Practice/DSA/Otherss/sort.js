let arr = [-1,-2,4,3]

let ans = []

ans = arr.sort((a , b) => a - b)

console.log(ans)


//=========================

let arr1 = [0,2,2,0,2,0,1,0,1]

let low = 0
let mid = 0
let end = 0

for (let item of arr1) 
{
    if (item == 0) 
    {
        low++
    }
    else if(item == 1)
    {
        mid++
    }
    else if(item == 2)
    {
        end++
    }
}

while (arr1.length) 
{
    arr1.pop()
}

for (let i = 1; i <= low; i++) 
{
    arr1.push(0)
}
for (let i = 1; i <= mid; i++) 
{
    arr1.push(1)
}
for (let i = 1; i <= end; i++) 
{
    arr1.push(2)
}

console.log(arr1)