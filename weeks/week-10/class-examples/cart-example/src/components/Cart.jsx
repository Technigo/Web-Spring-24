import { useCart } from "../contexts/CartContext"

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useCart()

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div>
      <h2>Cart</h2>
      <ul style={{ listStyleType: "none" }}>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
