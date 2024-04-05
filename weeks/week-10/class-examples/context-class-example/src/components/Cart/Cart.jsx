import { useCart } from "../utils"
import "./Cart.css"

const Cart = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useCart()

  const handleIncreaseQuantity = (productId) => {
    addToCart(cart.find((item) => item.id === productId))
  }

  const handleDecreaseQuantity = (productId) => {
    removeFromCart(productId)
  }

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="cart" onClick={stopPropagation}>
      <h2>Shopping Cart</h2>
      {cart.length ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p>Price: ${item.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3>Your cart is empty</h3>
      )}
      {cart.length > 0 && (
        <div>
          Total: ${totalPrice.toFixed(2)} {/* Display total price */}
        </div>
      )}
      <div className="clear-cart">
        {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </div>
    </div>
  )
}

export default Cart
