
const ProductCard = ({title, price, image}) => {
  return (
    <div className="border">
        <img className="w-full h-8/10" src={image} alt="" />

        <div>
            <div>{title}</div>
            <p>{price}</p>
        </div>
        
    </div>

  )
}

export default ProductCard
