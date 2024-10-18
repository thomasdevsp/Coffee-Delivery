import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import {
  CardContainer,
  InputButtons,
  MarketButton,
  MarketContainer,
  PaymentItens,
  PropsContainer,
} from "./styles"
import {
  TitleMBaloo,
  TitleSBaloo,
} from "../../../../styles/texts/tittleThemes"
import { Tag, TextSRoboto } from "../../../../styles/texts/textThemes"
import { CoffeeProps } from "../../../../contexts/cartContext/interfaces"
import { useCartContext } from "../../../../contexts/cartContext/useCartContext"

interface CardCoffeeProps {
  data: CoffeeProps;
}

export function CardCoffee({
  data,
}: CardCoffeeProps) {

  const { incrementCoffee, drecrementCoffee } = useCartContext()

  function handleIncrementCoffee() {
    incrementCoffee(data.id)
  }

  function handleDrecrementCoffee() {
    drecrementCoffee(data.id)
  }

  const formatedPrice = data.price.toFixed(2).toString().replace(".", ",")

  return (
    <CardContainer>
      <img src={data.image} />

      <Tag statusColor="yellow-dark">Tradicional</Tag>

      <PropsContainer>
        <TitleSBaloo statusColor="base-subtitle">{data.title}</TitleSBaloo>
        <TextSRoboto statusColor="base-label">{data.description}</TextSRoboto>
      </PropsContainer>
      <MarketContainer>
        <TextSRoboto className="Flex" statusColor="base-text">
          R$ <TitleMBaloo statusColor="base-text">{formatedPrice}</TitleMBaloo>
        </TextSRoboto>

        <PaymentItens>
          <InputButtons onClick={handleDrecrementCoffee} className="Minus">
            <Minus size={14} weight="bold" />
          </InputButtons>
          <span>{data.quantity}</span>
          <InputButtons onClick={handleIncrementCoffee}  className="Plus">
            <Plus size={14} weight="bold" />
          </InputButtons>
        </PaymentItens>

        <MarketButton >
          <ShoppingCart size={22} weight="fill" />
        </MarketButton>
      </MarketContainer>
    </CardContainer>
  )
}
