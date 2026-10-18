import { memo } from "react"

const TodoItem = ({ todo, onDelete, onToggle }) => {

  console.log("TodoItem Render:", todo.title)

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border p-4">

      <div className="flex min-w-0 flex-1 items-center gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          className={`break-words ${
            todo.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>

      </div>

      <button
        className="rounded bg-red-500 px-3 py-2 text-white"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>

    </div>
  )
}

export default memo(TodoItem)