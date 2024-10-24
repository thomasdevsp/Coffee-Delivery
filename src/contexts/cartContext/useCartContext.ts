import { useContext } from "react"
import { CartContext } from "./cartContext"

export const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}
