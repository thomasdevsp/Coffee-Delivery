import { Minus, Plus, Trash } from "@phosphor-icons/react"
import {
  CardContainer,
  CoffeeSeparator,
  CompactCardContainer,
  ControllerButtons,
  CounterButtons,
  InfoCardContainer,
  InputButtons,
  Price,
  PropsContainer,
  TrashButton,
} from "./styles"
import { ButtonM, TextMRoboto } from "../../../../styles/texts/textThemes"
import { CoffeeProps } from "../../../../contexts/cartContext/interfaces"
import { useCartContext } from "../../../../contexts/cartContext/useCartContext"

interface CompactCardCoffeeProps {
  data: CoffeeProps;
}

export function CompactCardCoffee({ data }: CompactCardCoffeeProps) {
  const { incrementCoffeeFiltered, drecrementCoffeeFiltered, removeCoffee } = useCartContext()
{
  const correctedPrice =  data.price * data.quantity
  const formatedPrice = correctedPrice.toFixed(2).toString().replace(".", ",")

  function handleDrecrementCoffee() {
    drecrementCoffeeFiltered(data.id)
  }

  function handleIncrementCoffee() {
    incrementCoffeeFiltered(data.id)
  }

  function handleremoveCoffee() {
    removeCoffee(data.id)
  }

  return (
    <CardContainer>
      <CompactCardContainer>
        <div>
          <img src={data.image} />
        </div>
        <InfoCardContainer>
          <PropsContainer>
            <TextMRoboto statusColor="base-subtitle">{data.title}</TextMRoboto>
          </PropsContainer>

          <ControllerButtons>
            <CounterButtons>
              <InputButtons onClick={handleDrecrementCoffee} className="Minus">
                <Minus size={14} weight="bold" />
              </InputButtons>
              <span>{data.quantity}</span>
              <InputButtons onClick={handleIncrementCoffee} className="Plus">
                <Plus size={14} weight="bold" />
              </InputButtons>
            </CounterButtons>

            <TrashButton onClick={handleremoveCoffee}>
              <Trash size={16} weight="regular" />
              <ButtonM statusColor="base-text">REMOVER</ButtonM>
            </TrashButton>
          </ControllerButtons>
        </InfoCardContainer>
        <Price>R$ {formatedPrice}</Price>
      </CompactCardContainer>
      <CoffeeSeparator />
    </CardContainer>
  )
}
}
