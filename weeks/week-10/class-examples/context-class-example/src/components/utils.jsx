import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const useCart = () => {
  return useContext(CartContext)
}
