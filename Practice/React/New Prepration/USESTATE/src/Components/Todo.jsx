import { useState } from "react"

const Todo = () => {

    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

  return (
    <div>
        <div>
            <input className="border"
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }} 
                type="text" 
            />

            <button className="px-5" onClick={() => {
                 if (text === "") {
                    return
                }  
                setTodos([...todos, text])
                setText("")
            }}>Add</button>
        </div>

        <div>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Todo