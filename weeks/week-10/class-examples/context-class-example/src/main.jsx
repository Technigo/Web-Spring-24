import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {/* wrap the app with the new created favourites provider */}
      <App />
    </CartProvider>
  </React.StrictMode>
)
