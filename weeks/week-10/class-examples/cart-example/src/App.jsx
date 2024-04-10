import "./App.css"
import Cart from "./components/Cart"
import FavouriteList from "./components/FavouriteList"
import Login from "./components/Login"
import ProductList from "./components/ProductList"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import { FavouriteProvider } from "./contexts/FavouriteContexts"

export const App = () => {
  return (
    <AuthProvider>
      <Login />
      <FavouriteProvider>
        <CartProvider>
          <ProductList />
          <Cart />
        </CartProvider>
        <FavouriteList />
      </FavouriteProvider>
    </AuthProvider>
  )
}
