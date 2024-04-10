import { useCart } from "../../contexts/CartContext"
import "./Product.css"

// 1.import the hook to access the global state with favourite items data

const Product = ({ product }) => {
  const { addToCart } = useCart()

  // 3. Use the data from global state to add and remove item from favourites and get info about favourites


  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
     
     {/* create a button to add and remove item from favourites */}
      </div>
    </div>
  )
}

export default Product
