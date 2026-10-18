import { useState, useCallback } from "react"
import Todoitem from "./Components/Todoitem"

const App = () => {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = useCallback(() => {
    const title = text.trim()

    if (title === "") {
      return
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    setTodos(prev => [...prev, newTodo])
    setText("")
  }, [text])

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id)
    )
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed}
          : todo
      )
    )
  }, [])

  console.log("App Render")

  return (
    <div className="mx-auto max-w-2xl p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Todo Manager
      </h1>

      <div className="mb-6 flex gap-3">
        <input
          className="min-w-0 flex-1 rounded-lg border p-3"
          type="text"
          value={text}
          placeholder="Enter your task..."
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="rounded-lg bg-blue-600 px-5 text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-500">
          No tasks available.
        </p>
      ) : (
        <div className="space-y-3">
          {todos.map(todo => (
            <Todoitem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))}
        </div>
      )}

      <p className="mt-6 text-gray-600">
        Total Tasks: {todos.length}
      </p>

      <p className="text-gray-600">
        Completed: {todos.filter(todo => todo.completed).length}
      </p>

    </div>
  )
}

export default App