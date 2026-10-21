import { useState, useMemo } from "react"

const products = [
  { id: "P101", name: "Wireless Headphones", price: 2499, category: "Electronics" },
  { id: "P102", name: "Smartwatch", price: 3999, category: "Electronics" },
  { id: "P103", name: "Cotton T-Shirt", price: 699, category: "Apparel" },
  { id: "P104", name: "Running Shoes", price: 1899, category: "Footwear" },
  { id: "P105", name: "Water Bottle", price: 499, category: "Home & Kitchen" },
  { id: "P106", name: "Wireless Mouse", price: 799, category: "Electronics" },
  { id: "P107", name: "Formal Shirt", price: 999, category: "Apparel" },
  { id: "P108", name: "Laptop Stand", price: 1299, category: "Electronics" },
  { id: "P109", name: "Coffee Mug", price: 299, category: "Home & Kitchen" },
  { id: "P110", name: "Casual Sneakers", price: 1599, category: "Footwear" }
]

const Pro = () => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("All")

  const ans = useMemo(() => {
    const search = value.trim().toLowerCase()

    return products.filter((item) => {
      const matchName = item.name.toLowerCase().includes(search)

      const matchCategory = category === "All" || item.category === category

      return matchName && matchCategory
    })
  }, [value, category])

  return (
    <div className="p-6">
      <h1 className="mb-5 text-3xl font-bold">
        Product Search
      </h1>

      <div className="mb-6 flex flex-wrap gap-4">
        <input
          className="rounded-lg border p-3"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search products..."
        />

        <select
          className="rounded-lg border p-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Apparel">Apparel</option>
          <option value="Footwear">Footwear</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
        </select>
      </div>

      <p className="mb-4 text-gray-600">
        Products Found: {ans.length}
      </p>

      {ans.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ans.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border p-4 shadow-sm"
            >
              <h2 className="text-lg font-bold">
                {item.name}
              </h2>

              <p className="mt-2 text-green-700">
                ₹{item.price.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {item.category} 
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Pro