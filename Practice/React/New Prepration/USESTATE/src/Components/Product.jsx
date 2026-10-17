import ProductsCard from "./ProductsCard";

const Product = ({setP}) => {

  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,499",
    quantity: "15 units",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹3,999",
    quantity: "8 units",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "₹1,899",
    quantity: "20 units",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80"
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹1,299",
    quantity: "12 units",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: "₹799",
    quantity: "25 units",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&q=80"
  },
  {
    id: 6,
    name: "Water Bottle",
    price: "₹499",
    quantity: "50 units",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&q=80"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "₹1,599",
    quantity: "10 units",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&q=80"
  },
  {
    id: 8,
    name: "Laptop Sleeve",
    price: "₹899",
    quantity: "18 units",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&q=80"
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: "₹1,199",
    quantity: "14 units",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&q=80"
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: "₹699",
    quantity: "30 units",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&q=80"
  }
];

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        products.map((item) => {
          return <ProductsCard setP={setP} id={item.id} key={item.id} name={item.name} price={item.price} quantity={item.quantity} image={item.image}/>
        })
      }
        
    </div>
  )
}

export default Product