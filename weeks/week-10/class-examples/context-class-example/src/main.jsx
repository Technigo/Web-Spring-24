import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"
import { FavouriteProvider } from "./contexts/FavouriteContext.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FavouriteProvider>
        <App />
      </FavouriteProvider>
    </CartProvider>
  </React.StrictMode>
)
