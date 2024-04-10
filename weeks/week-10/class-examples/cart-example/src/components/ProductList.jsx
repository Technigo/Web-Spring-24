import { useCart } from "../contexts/CartContext"
import { useFavourites } from "../contexts/FavouriteContexts"

const products = [
  { id: 1, name: "Black Coffee", price: 3 },
  { id: 2, name: "Chai Latte", price: 4 },
  { id: 3, name: "Macha Latte", price: 5 },
]

const ProductList = () => {
  const { addToCart } = useCart()
  const { addToFavourites, removeFromFavourites, favourites } = useFavourites()

  const handleToggleFavourite = (product) => {
    if (favourites.includes(product)) {
      removeFromFavourites(product)
    } else {
      addToFavourites(product)
    }
  }

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyleType: "none" }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button
              style={{ border: "1px solid grey", margin: "4px 10px" }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button onClick={() => handleToggleFavourite(product)}>
              {favourites.includes(product)
                ? "Remove from Favourites"
                : "Add to Favourites"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
