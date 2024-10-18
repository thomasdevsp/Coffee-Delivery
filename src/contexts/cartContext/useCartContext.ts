import { useContext } from "react"
import { CortContext } from "./cartContext"

export const useCartContext = () => {
  const context = useContext(CortContext)
  return context
}
