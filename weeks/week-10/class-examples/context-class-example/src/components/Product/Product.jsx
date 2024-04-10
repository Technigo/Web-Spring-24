import { useCart } from "../../contexts/CartContext"
import { useFavourites } from "../../contexts/FavouriteContext"
import "./Product.css"

const Product = ({ product }) => {
  const { addToCart } = useCart()
  const { addToFavourites, removeFromFavourites, favourites } = useFavourites()

  const isFavourite = (productId) =>
  favourites.some((item) => item.id === productId)

const handleToggleFavourite = (product) => {
  if (isFavourite(product.id)) {
    removeFromFavourites(product)
  } else {
    addToFavourites(product)
  }
}

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
        <button className="btn" onClick={() => handleToggleFavourite(product)}>
          {isFavourite(product.id) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  )
}

export default Product
