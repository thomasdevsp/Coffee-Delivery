import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  CardContainer,
  ControllerButtons,
  CounterButtons,
  InfoCardContainer,
  InputButtons,
  Price,
  PropsContainer,
  TrashButton,
} from "./styles";

interface CardCoffeeProps {
  image: string;
  title: string;
}

export function CompactCardCoffee(props: CardCoffeeProps) {
  return (
    <CardContainer>
      <div>
        <img src={props.image} />
      </div>

      <InfoCardContainer>
        <PropsContainer>
          <h3>{props.title}</h3>
        </PropsContainer>

        <ControllerButtons>
          <CounterButtons>
            <InputButtons className="Minus">
              <Minus size={14} weight="bold" />
            </InputButtons>
            <span>0</span>
            <InputButtons className="Plus">
              <Plus size={14} weight="bold" />
            </InputButtons>
          </CounterButtons>

          <TrashButton>
            <Trash size={16} weight="regular" />
            <span>REMOVER</span>
          </TrashButton>
        </ControllerButtons>
      </InfoCardContainer>
      <Price>R$ 9,90</Price>
    </CardContainer>
  );
}
