import { useState, ReactNode } from "react"
import { CoffeeProps } from "./interfaces"
import { CartContext } from "./cartContext"
import { coffeeListDefault } from "./data"

// @TODO: modificar o nome CortListContextProvider para CortContextProvider

export function CartListContextProvider({ children }: { children: ReactNode }) {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>(coffeeListDefault)
  const [filteredCoffeeList, setFilteredCoffeeList] = useState<CoffeeProps[]>([])

  function incrementCoffee(id: number) {
    const NewCoffeeList = coffeeList.map(coffee =>
      coffee.id == id ?
      { ...coffee, quantity: coffee.quantity + 1 }
      : coffee,
    )

    setCoffeeList(NewCoffeeList)

  }

 function incrementCoffeeFiltered(id:number) {
  const NewFilterCoffeeList = filteredCoffeeList.map(coffee => {
    const quantity = coffee.quantity = coffee.quantity + 1
    return coffee.id == id ? { ...coffee, quantity } : coffee
  })

  setFilteredCoffeeList(NewFilterCoffeeList)
 }

 function drecrementCoffeeFiltered(id:number) {
  const NewFilterCoffeeList = filteredCoffeeList.map(coffee => {
    const quantity = coffee.quantity > 0 ? coffee.quantity - 1 : 0
    const onCart = coffee.quantity === 0 ? coffee.onCart = false : true
    return coffee.id == id ? { ...coffee, quantity, onCart } : coffee
  })

    setFilteredCoffeeList(NewFilterCoffeeList)
 }

  function drecrementCoffee(id: number) {
    const NewCoffeeList = coffeeList.map(coffee => {
      const quantity = coffee.quantity > 0 ? coffee.quantity - 1 : 0
      return coffee.id == id ? { ...coffee, quantity } : coffee
    })

      setCoffeeList(NewCoffeeList)
  }

  function addToCart(id: number) {
    const OnCoffeeList = coffeeList.map(coffee =>
      coffee.id === id ?
      { ...coffee, onCart: true }
      : coffee)

    const newFilteredCoffeeList = OnCoffeeList.filter((coffee) => coffee.onCart == true)

      setFilteredCoffeeList(newFilteredCoffeeList)

    const NewCoffeeList = coffeeList.map(coffee =>
      coffee.id === id ?
      { ...coffee, quantity: 0 }
      : coffee)

      setCoffeeList(NewCoffeeList)

  }

  function removeCoffee(id: number) {
    const NewFilteredCoffeeList = filteredCoffeeList.filter((coffee) => coffee.id != id)
    return setFilteredCoffeeList(NewFilteredCoffeeList)

  }

  // 5 - Dentro do carrinho, pegar a lista de cafes do context e criar uma lista filtrado só com o onCart true e exibir essa lista no carrinho

  // 6 - Criar a função de diminuir um item do

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        filteredCoffeeList,
        incrementCoffee,
        drecrementCoffee,
        incrementCoffeeFiltered,
        drecrementCoffeeFiltered,
        removeCoffee,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
