
const ProductsCard = ({ name, price, quantity, image , setP, id}) => {


    const addToCart = () => {
        setP((prevCart) => {

        const existingProduct = prevCart.find(
          (item) => item.id === id
        )

        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  cartQuantity: item.cartQuantity + 1
                }
              : item
          )
        }

        return [
          ...prevCart,
          {
            id,
            name,
            price,
            image,
            stock: quantity,
            cartQuantity: 1
          }
        ]
      })
    }

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">

        <h1 className="mb-4 truncate text-xl font-bold text-gray-800">
          {name}
        </h1>

        <div className="mb-5 flex items-center justify-between gap-3">

          <p className="text-xl font-bold text-green-600">
            {price}
          </p>

          <p className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            Qty: {quantity}
          </p>

        </div>

        <button onClick={addToCart}
         className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-95">
          Add to Cart
        </button>

      </div>

    </div>
  )
}

export default ProductsCard
