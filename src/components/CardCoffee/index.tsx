import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CardContainer,
  InputButtons,
  MarketButton,
  MarketContainer,
  PaymentItens,
  PropsContainer,
} from "./style";

interface CardCoffeeProps {
  image: string;
  title: string;
  description: string;
}

export function CardCoffee(props: CardCoffeeProps) {
  return (
    <CardContainer>
      <img src={props.image} />

      <span className="Tag">Tradicional</span>

      <PropsContainer>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </PropsContainer>
      <MarketContainer>
        <span>
          R$ <b>9,90</b>
        </span>

        <PaymentItens>
          <InputButtons className="Minus">
            <Minus size={14} weight="bold" />
          </InputButtons>
          <span>0</span>
          <InputButtons className="Plus">
            <Plus size={14} weight="bold" />
          </InputButtons>
        </PaymentItens>

        <MarketButton>
          <ShoppingCart size={22} weight="fill" />
        </MarketButton>
      </MarketContainer>
    </CardContainer>
  );
}
