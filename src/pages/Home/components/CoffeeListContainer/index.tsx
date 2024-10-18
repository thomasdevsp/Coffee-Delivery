import { CoffeeCardsContainer } from "./styles"
import { CardCoffee } from "../CardCoffee"
import { useCartContext } from "../../../../contexts/cartContext/useCartContext"
import { CoffeeProps } from "../../../../contexts/cartContext/interfaces"

export interface CoffeeListContextProps {
  coffeeList: CoffeeProps[];
}

export function CoffeeListContainer() {
  const { coffeeList } = useCartContext()

  return (
    <CoffeeCardsContainer>
      {coffeeList.map((coffee) => (
        <CardCoffee
          key={coffee.id}
          data={coffee}
        />
      ))}
    </CoffeeCardsContainer>
  )
}
