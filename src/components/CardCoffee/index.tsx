import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CardContainer,
  InputButtons,
  MarketButton,
  MarketContainer,
  PaymentItens,
  PropsContainer,
} from "./styles";
import { TitleMBaloo, TitleSBaloo } from "../../styles/texts/tittleThemes";
import { Tag, TextSRoboto } from "../../styles/texts/textThemes";

interface CardCoffeeProps {
  image: string;
  title: string;
  description: string;
}

export function CardCoffee(props: CardCoffeeProps) {
  return (
    <CardContainer>
      <img src={props.image} />

      <Tag statusColor="yellow-dark">Tradicional</Tag>

      <PropsContainer>
        <TitleSBaloo statusColor="base-subtitle">{props.title}</TitleSBaloo>
        <TextSRoboto statusColor="base-label">{props.description}</TextSRoboto>
      </PropsContainer>
      <MarketContainer>
        <TextSRoboto className="Flex" statusColor="base-text">
          R$ <TitleMBaloo statusColor="base-text">9,90</TitleMBaloo>
        </TextSRoboto>

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
