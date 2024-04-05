import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0)

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id)

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      }
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }

    setCartItemCount(cartItemCount + 1) // Increment the count when adding an item
  }

  const removeFromCart = (productId) => {
    const existingItemIndex = cart.findIndex((item) => item.id === productId)

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      if (updatedCart[existingItemIndex].quantity === 1) {
        updatedCart.splice(existingItemIndex, 1) // Remove item if quantity is 1
      } else {
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity - 1,
        }
      }
      setCart(updatedCart)
      setCartItemCount(cartItemCount - 1)
    }
  }

  const clearCart = () => {
    setCart([])
    setCartItemCount(0)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* 
CartProvider with both cart and cartItemCount states serves a purpose and can be useful for different scenarios:

cart: This state holds the actual cart items. It keeps track of the products added to the cart along with their quantities. This is essential for managing the contents of the cart and performing operations like adding, removing, or updating items.

cartItemCount: This state keeps track of the total count of items in the cart. While you could derive this count from the cart state, having a separate state for it can offer performance benefits. For example, if you frequently need to display the count in the UI (e.g., in a cart icon), having a separate state allows you to update the count more efficiently without iterating over the entire cart array each time. */
