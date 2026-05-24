function sum(n) 
{
    if(n == 0) return 0
    if(n == 1) return 1

    return  n + sum(n - 1)
}

console.log(sum(5))

// =======================

function minus(n) 
{
    if(n == 0) return 

    console.log(n)
    
    minus(n - 1)
    
    console.log(n)

}
minus(5)

//=========================

function dec(n)
{
    if(n == 0) return ""

    return n + " " + dec(n - 1)
    
}

let ans = dec(5).trim()

console.log(ans)

//=============================

function power(x , y , ans) 
{
    if(y == 0) return x
    
    if(y > 0)
    {
        ans++
        y--
        power(y)
        
        let aa = x * ans 
        return aa
    }
}

power(2 , 3 , 0)

function p(q , z) 
{
    console.log(q)

    if(z > q)
    {
        return p(q + 1 , z)
    }
}

p(2,8)

//===================

{
    function NthEvenFibonacci(n)
    {
       function helper(n)
       {
          if(n == 1 || n == 2)
          {
            return 1
          }
          
          return helper(n - 1) + helper(n - 2)
       }
    
      return helper(n * 3)
    }

    console.log(NthEvenFibonacci(5))
}