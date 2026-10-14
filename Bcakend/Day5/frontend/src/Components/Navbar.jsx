import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-8 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Mickey Singh
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={"/"}
            className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 hover:text-blue-700 transition duration-200"
          >
            Home
          </Link>

          <Link
            to={"/new"}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200"
          >
            New Task
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar