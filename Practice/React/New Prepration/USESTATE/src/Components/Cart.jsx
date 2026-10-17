
const Cart = ({ p }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          My Cart
        </h1>

        {p.length === 0 ? (
          <h2 className="rounded-xl bg-white p-8 text-center text-xl text-gray-500 shadow-sm">
            Cart is Empty
          </h2>
        ) : (
          <div className="space-y-4">
            {p.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="mt-1 font-semibold text-green-600">
                    {item.price}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Available stock: {item.stock}
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    Cart Quantity: {item.cartQuantity}
                  </p>
                </div>

                <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                  Buy
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart
