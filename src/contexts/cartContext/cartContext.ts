import { createContext } from "react"
import { CoffeeProps } from "./interfaces"

export interface CortContextType {
  coffeeList: CoffeeProps[];
  incrementCoffee(id: number): void
  drecrementCoffee(id: number): void
}

export const CortContext = createContext({} as CortContextType)
