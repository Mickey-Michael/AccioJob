import { memo, useMemo,  useState } from "react"
import Child from "./Child"

const Parent = () => {

    console.log("Parent")

    const [n, setN] = useState(1)
    const [text, setText] = useState("")


    function nthPrime(n) {
       let count = 0
       let num = 2
     
       while (count < n) {
            let isPrime = true
        
            for (let i = 2; i < num; i++) {
              if (num % i === 0) {
                isPrime = false
                break
              }
            }
        
            if (isPrime) {
              count++
            }
        
            if (count < n) {
              num++
            }
        }
     
       return num
    }

    // let ans = nthPrime(n)

    let ans = useMemo(() => nthPrime(n) ,[n])

  return (
    <div>
        <div>
            <h1>{n}th Prime no is {ans}</h1>

            <input onChange={(e) => {
                setN(Number(e.target.value))
            }} type="number" />
        </div>


        <div>
            <input onChange={(e) => {
                setText(e.target.value)
            }} type="text" />
        </div>

        <h1>{text}</h1>

        <Child/>
    </div>
  )
}

export default memo(Parent)