import { createContext } from "react"
import { CoffeeProps } from "./interfaces"

export interface CartContextType {
  coffeeList: CoffeeProps[];
  filteredCoffeeList: CoffeeProps[];
  incrementCoffee(id: number): void
  drecrementCoffee(id: number): void
  incrementCoffeeFiltered(id: number): void
  drecrementCoffeeFiltered(id: number): void
  removeCoffee(id: number): void
  addToCart(id: number): void
}

export const CartContext = createContext({} as CartContextType)
