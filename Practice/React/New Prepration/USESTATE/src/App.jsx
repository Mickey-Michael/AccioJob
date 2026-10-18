import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(0)
      }}>Rest</button>
      <button onClick={() => {
        setCount(prev => Math.max(0, prev - 1))
      }}>Decrement</button>

      <div>

        <input value={text} onChange={(e) => {
          setText(e.target.value)
        }} type="text" />

        <button onClick={() => {
          const aa = text.trim()
          if(aa === "")
          {
            return
          }

          const obj = {
            id : Date.now(),
            value :aa
          }
          setTodo(prev => [...prev, obj])
          setText("")
        }}>Add</button>

      </div>

      <div>
        <ul>
          {
            todo.map((item) => {
              return (
                
                <li key={item.id}>
                  <span>{item.value}</span>
                  <button onClick={() => {
                    setTodo(prev => prev.filter(aa => aa.id !== item.id))
                  }}>Delete</button>
                </li>
              ) 
            })
          }        
        </ul>
      </div>
      




    </div>
  )
}

export default App