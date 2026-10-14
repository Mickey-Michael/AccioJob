import ProductCard from "./Components/ProductCard"
import SaleWrapper from "./Components/SaleWrapper"

const App = () => {

  const products = [
    {
      id: 1,
      title: "Men's Casual T-Shirt",
      price: 499,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      description: "Comfortable cotton casual t-shirt",
      stock: 25,
      sale: true
    },
    {
      id: 2,
      title: "Men's Denim Jeans",
      price: 999,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      description: "Stylish slim-fit denim jeans",
      stock: 15,
      sale: true
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 1499,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      description: "Lightweight shoes for everyday running",
      stock: 10,
      sale: false
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 2499,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      description: "Smart watch with fitness tracking",
      stock: 8,
      sale: true
    },
    {
      id: 5,
      title: "Wireless Headphones",
      price: 1299,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "Wireless headphones with clear sound",
      stock: 20,
      sale: false
    },
    {
      id: 6,
      title: "Travel Backpack",
      price: 899,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      description: "Durable backpack for travel and college",
      stock: 12,
      sale: true
    },
    {
      id: 7,
      title: "Men's Formal Shirt",
      price: 799,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400",
      description: "Classic formal shirt for office wear",
      stock: 18,
      sale: false
    },
    {
      id: 8,
      title: "Sunglasses",
      price: 599,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
      description: "Stylish sunglasses for everyday use",
      stock: 30,
      sale: true
    }
  ]

  return (
    <div>

      <div className="grid grid-cols-3 gap-10">
        {
          products.map((item) => {

            if(item.sale)
            {
              return <SaleWrapper>
                  <ProductCard  title={item.title} price={item.price} image={item.image}/>
              </SaleWrapper>
            }


            return <ProductCard  title={item.title} price={item.price} image={item.image}/>
              
          })
        }
      </div>
      
    </div>
  )
}

export default App
