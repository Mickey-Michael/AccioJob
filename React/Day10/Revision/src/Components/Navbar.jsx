import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-700 p-5">

        <h1 className="text-3xl">Mickey</h1>

        <div className="flex gap-5">

            <NavLink className={({isActive}) => {
              if(isActive)
              {
                return "bg-amber-300 underline"
              }
            }} to={"/home"}>Home</NavLink>

            <NavLink className={({isActive}) => {
              if(isActive)
              {
                return "bg-amber-300 underline"
              }
            }} to={"/profile"}>Profile</NavLink>

            <NavLink className={({isActive}) => {
              if(isActive)
              {
                return "bg-amber-300 underline"
              }
            }} to={"/about"}>About</NavLink>

        </div>
        
    </nav>
  )
}

export default Navbar