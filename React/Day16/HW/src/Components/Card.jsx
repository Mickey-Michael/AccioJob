import { useDispatch } from "react-redux"
import { addlist } from "../Utils/ListSlice"

const Card = ({ item }) => {

    const dispatch = useDispatch()

    return (

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        <h1 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {item.title}
        </h1>

        <p className="text-gray-600 text-sm leading-6 mb-5">
          {item.description}
        </p>

        <div className="flex justify-between items-center border-t border-gray-200 pt-4">

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            Stock: {item.stock}
          </span>

          <span className="text-green-600 text-xl font-bold">
            ${item.price}
          </span>

        </div>

        <button onClick={() => {
            dispatch(addlist(item))
          }}
          className="w-full mt-4 bg-blue-600 text-white rounded-lg p-3 text-sm font-semibold hover:bg-blue-700 transition">
          Add to Cart
        </button>

      </div>
    )
}

export default Card