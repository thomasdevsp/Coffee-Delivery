import { useState, ReactNode } from "react"
import { CoffeeProps } from "./interfaces"
import { CortContext } from "./cartContext"
import { coffeeListDefault } from "./data"

// @TODO: modificar o nome CortListContextProvider para CortContextProvider

export function CortContextProvider({ children }: { children: ReactNode }) {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>(coffeeListDefault)

  function incrementCoffee(id: number) {
    const NewCoffeeList = coffeeList.map(coffee =>
      coffee.id == id ?
      { ...coffee, quantity: coffee.quantity + 1, onCart: true }
      : coffee,
    )
    setCoffeeList(NewCoffeeList)

  }

  function drecrementCoffee(id: number) {
    const NewCoffeeList = coffeeList.map(coffee => {
      const quantity = coffee.quantity > 0 ? coffee.quantity - 1 : 0
      return coffee.id == id ? { ...coffee, quantity } : coffee
    })

      setCoffeeList(NewCoffeeList)
  }

  // 5 - Dentro do carrinho, pegar a lista de cafes do context e criar uma lista filtrado só com o onCart true e exibir essa lista no carrinho

  // 6 - Criar a função de diminuir um item do

  return (
    <CortContext.Provider
      value={{
        coffeeList,
        incrementCoffee,
        drecrementCoffee,
      }}
    >
      {children}
    </CortContext.Provider>
  )
}
