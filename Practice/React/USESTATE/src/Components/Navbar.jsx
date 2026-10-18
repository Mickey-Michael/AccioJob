import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
     <nav className="flex bg-red-500 justify-between p-5">

        <Link className="text-2xl" to={"/"}>Mickey</Link> 

        <div className="flex gap-5">
        
            <NavLink className={({isActive}) => {
              return isActive ? "bg-blue-700 rounded" : ""
            }} to={"/Todo"} >Todos</NavLink>

            <NavLink className={({isActive}) => {
              return isActive ? "bg-blue-700  rounded" : ""
            }} to={"/Product"} >Products</NavLink>

            <NavLink className={({isActive}) => {
              return isActive ? "bg-blue-700 rounded" : ""
            }} to={"/Cart"}>Cart</NavLink>
        </div>
    </nav>
  )
}

export default Navbar