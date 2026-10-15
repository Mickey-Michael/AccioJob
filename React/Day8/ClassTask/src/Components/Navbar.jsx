import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-500 p-5">
        <h1 className="text-3xl">Mickey</h1>

        <div className="flex gap-5 py-2">
            <Link to="/Users">Users</Link>
            <Link to="/Todos">Todos</Link>
            <Link to="/Hp">Hp</Link>
        </div>

    </div>
  )
}

export default Navbar
