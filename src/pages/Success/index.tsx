import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { BaseIcon } from "../Home/styles";
import {
  ContentContainer,
  ItemContainer,
  OrderInfoContainer,
  TextContainer,
  TittleContainer,
} from "./styles";

import Motoboy from "../../assets/success/Illustration.png";
import { TitleLBaloo } from "../../styles/texts/tittleThemes";
import { TextLRoboto, TextMRoboto } from "../../styles/texts/textThemes";

export function Success() {
  return (
    <ContentContainer>
      <TittleContainer>
        <TitleLBaloo statusColor="yellow-dark">
          Uhu! Pedido confirmado
        </TitleLBaloo>
        <TextLRoboto statusColor="base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </TextLRoboto>
      </TittleContainer>

      <OrderInfoContainer>
        <ItemContainer>
          <BaseIcon statusColor="purple">
            <MapPin size={16} weight="fill" />
          </BaseIcon>
          <TextContainer>
            <TextMRoboto statusColor="base-text">
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
            </TextMRoboto>
            <TextMRoboto statusColor="base-text">
              Farrapos - Porto Alegre, RS
            </TextMRoboto>
          </TextContainer>
        </ItemContainer>

        <ItemContainer>
          <BaseIcon statusColor="yellow">
            <Timer size={16} weight="fill" />
          </BaseIcon>
          <TextContainer>
            <TextMRoboto statusColor="base-text">
              Embalagem mantém o café intacto
            </TextMRoboto>
            <TextMRoboto statusColor="base-text">
              <b>20 min - 30 min</b>
            </TextMRoboto>
          </TextContainer>
        </ItemContainer>

        <ItemContainer>
          <BaseIcon statusColor="yellowDark">
            <CurrencyDollar size={16} weight="fill" />
          </BaseIcon>
          <TextContainer>
            <TextMRoboto statusColor="base-text">
              Pagamento na Entrega
            </TextMRoboto>
            <TextMRoboto statusColor="base-text">
              <b>Cartão de Crédito</b>
            </TextMRoboto>
          </TextContainer>
        </ItemContainer>
      </OrderInfoContainer>

      <img src={Motoboy} />
    </ContentContainer>
  );
}
