import { useRef } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const New = () => {

  const titref = useRef(null)
  const disref = useRef(null)
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add New Task
        </h2>

        <div className="mb-5">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>

          <input
            ref={titref}
            type="text"
            placeholder="Enter Task Title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>

          <textarea
          ref={disref}
            type="text"
            placeholder="Enter Task Description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
         onClick={() => {
          if(!titref.current.value || !disref.current.value)
          {
            toast.error("Please enter all the fields....")
            return
          }

          fetch(import.meta.env.VITE_BACKEND_URL + "/todos/", {
            method :"POST",
            body : JSON.stringify({
              title : titref.current.value,
              des : disref.current.value 
            }),
            headers : {
              "Content-Type": "application/json"
            }
          })
          .then((res) => {
            return res.json()
          })
          .then(() => {
            nav("/")
          })

         }}
         className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default New
