import { useCart } from "../../contexts/CartContext"
import { useFavourites } from "../../contexts/FavouriteContext"
import "./Product.css"

const Product = ({ product }) => {
  const { addToCart } = useCart()
  const { addToFavourites, removeFromFavourites, favourites } = useFavourites()

  /* This function isFavourite checks if a product with a given productId exists in the favourites array. 
  It uses the some() method to iterate over each item in the favourites array. 
  The callback function (item) => item.id === productId checks if the id property of any item in the array matches the provided productId. 
  If at least one item's id matches the productId, the some() method returns true, indicating that the product is a favorite. */
  
  const isFavourite = (productId) =>
    favourites.some((item) => item.id === productId)

  /* This function handleToggleFavourite toggles a product between being a favorite and not being a favorite. It takes a product object as an argument. Inside the function:

  It first checks if the product is already a favorite by calling the isFavourite function with the product.id.
  If the product is already a favorite (the isFavourite function returns true), it removes the product from the favorites list using the removeFromFavourites function.
  If the product is not a favorite (the isFavourite function returns false), it adds the product to the favorites list using the addToFavourites function. */

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
          {/* {isFavourite(product.id) ? "❤️" : "🤍"} renders a heart emoji ("❤️") if the product is a favorite and a white heart emoji ("🤍") if the product is not a favorite.  */}
          {isFavourite(product.id) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  )
}

export default Product
