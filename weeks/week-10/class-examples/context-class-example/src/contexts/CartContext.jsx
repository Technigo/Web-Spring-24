import { createContext, useContext, useState } from "react"
// import { CartContext } from "./CartContext"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0)

  // we're gonna use the spread operator [...] to combine the properties of two objects into a new object and follow the immutability principle in programming

  const addToCart = (product) => {
    // to avoid adding the same item in the UI, we need to calculate if the item is present in the cart, and only increase the quantity
    // find the index of the item already in the array
    const existingItemIndex = cart.findIndex((item) => item.id === product.id)

    // if the item exists in the cart, update the quantity
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      // with the existing item index we can specify for each item to update the quantity + 1 and copy all the rest of the object
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      }

      setCart(updatedCart)
    } else {
      // if the item is new to the cart, create an array with a new product object and set the quantity to 1
      setCart([...cart, { ...product, quantity: 1 }])
    }

    setCartItemCount(cartItemCount + 1) // Increment the count when adding an item
    // console.log(cart.length, product)
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)

    setCart(updatedCart)
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

export const useCart = () => {
  return useContext(CartContext)
}

/* 
CartProvider with both cart and cartItemCount states serves a purpose and can be useful for different scenarios:

cart: This state holds the actual cart items. It keeps track of the products added to the cart along with their quantities. This is essential for managing the contents of the cart and performing operations like adding, removing, or updating items.

cartItemCount: This state keeps track of the total count of items in the cart. While you could derive this count from the cart state, having a separate state for it can offer performance benefits. For example, if you frequently need to display the count in the UI (e.g., in a cart icon), having a separate state allows you to update the count more efficiently without iterating over the entire cart array each time. */
