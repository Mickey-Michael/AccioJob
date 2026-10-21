import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const val = useSelector((store) => {
    let ans = 0

    for (let i of store.list) {
      ans += i.quantity
    }

    return ans
  })

  return (
    <div className="flex justify-between items-center bg-red-400 p-4">

      <h1 className="text-2xl font-bold">Mickey</h1>

      <div className="flex gap-5 items-center">

        <NavLink to={"/"}>Home</NavLink>

        <NavLink to={"/Cart"} className="relative">
          Cart
          <span className="absolute -top-3 -right-4 bg-red-600 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
            {val}
          </span>
        </NavLink>

      </div>

    </div>
  )
}

export default Navbar