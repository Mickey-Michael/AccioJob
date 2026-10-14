
const SaleWrapper = ({children}) => {
  return (
    <div className="relative">
        <span className="bg-red-400 text-white absolute">On Sale</span>
        {children}
    </div>
  )
}

export default SaleWrapper
