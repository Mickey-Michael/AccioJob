import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-500 p-4">
        <h1 className="text-3xl">Mickey</h1>


        <div className="flex gap-4">
            <NavLink className={({isActive}) => {
                if(isActive)
                {
                    return "bg-red-400"
                }
            }} to="/A">A</NavLink>

            <NavLink className={({isActive}) => {
                if(isActive)
                {
                    return "bg-red-400"
                }
            }} to="/B">B</NavLink>
            
            <NavLink className={({isActive}) => {
                if(isActive)
                {
                    return "bg-red-400"
                }
            }} to="C">C</NavLink>

        </div>
    </nav>
  )
}

export default Navbar