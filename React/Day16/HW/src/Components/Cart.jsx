import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const data = useSelector((store) => store.list)
  const nav = useNavigate()

  const total = data.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <h1 className="text-3xl font-bold text-gray-700">
          🛒 Cart Empty
        </h1>
        <button onClick={() => nav("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Go Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        My Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 space-y-4">
          {data.map((item) => (
            <div key={item.id}
              className="bg-white p-4 rounded-xl shadow flex items-center gap-4">

              <img src={item.thumbnail} alt={item.title}
                className="w-24 h-24 object-contain bg-gray-50 rounded-lg" />

              <div className="flex-1">
                <h2 className="font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-green-600 font-semibold mt-2">
                  ${item.price}
                </p>
                <p className="text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              <p className="font-bold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-xl font-bold mb-5">Order Summary</h2>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Total Items</span>
            <span>{data.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>

          <div className="flex justify-between border-t pt-4">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-xl text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => alert("Checkout coming soon!")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>

      </div>
    </div>
  )
}

export default Cart