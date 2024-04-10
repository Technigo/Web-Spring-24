import Product from "./components/Product/Product"
import Cart from "./components/Cart/Cart"
import { useEffect, useRef, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"

import "./App.css"
import { useCart } from "./contexts/CartContext"
import FavouriteList from "./components/FavouriteList"

const products = [
  {
    id: 1,
    name: "Headphones",
    description: "Description 1",
    price: 10,
    image: "headphones.jpg",
  },
  {
    id: 2,
    name: "Fragrance",
    description: "Description 2",
    price: 15,
    image: "perfume.jpg",
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Description 3",
    price: 20,
    image: "shoes.jpg",
  },
]

const App = () => {
  const { cartItemCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartRef = useRef(null)

  useEffect(() => {
    const handleClickOutsideCart = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutsideCart)
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart)
    }
  }, [])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <div className="header">
        <h1>🛒 Online Store 🛍️</h1>
        <div className="cart-icon" onClick={toggleCart}>
          <FaShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
          {isCartOpen && (
            <div className="cart-dropdown" ref={cartRef}>
              <Cart />
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <h2>Products</h2>
        <div className="products-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <FavouriteList />
      </div>
    </>
  )
}

export default App
