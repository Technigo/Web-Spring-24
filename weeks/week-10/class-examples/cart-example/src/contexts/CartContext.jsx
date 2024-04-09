import { useContext } from "react"
import { createContext, useState } from "react"

export const CartContext = createContext()

// passing children as a prop allows you to wrap other components with the CartProvider component while preserving their hierarchy.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  /*   const addToCart = (product) => {
    setCartItems([...cartItems, product])
  } */

  /* 
  ADD
  To increase the quantity of an item in the cart without replicating the product item in the UI, you can modify the data structure of your cart items to include a quantity property. Then, when adding a product to the cart, you can check if the product already exists in the cart. If it does, you can simply increase the quantity instead of adding a new item. 

  *** const updatedCartItems = [...cartItems] *** 


  creates a shallow copy of the cartItems array using the spread operator (...). This syntax is a concise way to create a new array with all the elements from the cartItems array.

  By creating a shallow copy, we ensure that any modifications made to updatedCartItems won't affect the original cartItems array. This is important because directly modifying the state could lead to unexpected behavior in React due to its immutability requirements.
  */

  const addToCart = (product) => {
    // check if the product already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    )

    if (existingItemIndex !== -1) {
      // If product already exists in cart, increase quantity
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += 1
      setCartItems(updatedCartItems)
    } else {
      // Otherwise, add new item to cart, update array of objects with spread operators
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  /* REMOVE 
    removeFromCart which takes the productId as an argument. This function decrements the quantity of the item with the provided productId in the cart. If the quantity becomes zero, we filter out that item from the cart.
    This effectively decreases the quantity of the item with the specified productId in the cart.


  */

  const removeFromCart = (productId) => {
    // This line maps over each item in the cartItems array.
    const updatedCartItems = cartItems
      .map((item) =>
        /*     For each item, it checks if the id of the item matches the productId passed to the function.
        If there's a match, it creates a new object { ...item, quantity: item.quantity - 1 }, where it spreads the properties of the original item and decreases the quantity by 1. If there's no match, it returns the original item unchanged. */
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      //  this line filters out any items where the quantity is less than or equal to 0.
      .filter((item) => item.quantity > 0)

    // the function updates the cartItems state with the updatedCartItems array, which now contains the modified cart items.
    setCartItems(updatedCartItems)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
