import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeListContainer } from "./components/CoffeeListContainer";
import CoffeeCoup from "../../assets/introduction/Imagem.svg";
import { TitleLBaloo, TitleXLBaloo } from "../../styles/texts/tittleThemes";
import { TextLRoboto, TextMRoboto } from "../../styles/texts/textThemes";
import {
  BaseIcon,
  CoffeeContainer,
  ColectionItemContainer,
  HomeContainer,
  ImageContainer,
  IntroductionContainer,
  ItemContainer,
  TextContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <IntroductionContainer>
        <TextContainer>
          <TitleXLBaloo statusColor="base-title">
            Encontre o café perfeito para qualquer hora do dia
          </TitleXLBaloo>
          <TextLRoboto statusColor="base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextLRoboto>

          <ColectionItemContainer>
            <ItemContainer>
              <BaseIcon statusColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </BaseIcon>
              <TextMRoboto statusColor="base-text">
                Compra simples e segura
              </TextMRoboto>
            </ItemContainer>

            <ItemContainer>
              <BaseIcon statusColor="gray">
                <Package size={16} weight="fill" />
              </BaseIcon>
              <TextMRoboto statusColor="base-text">
                Embalagem mantém o café intacto
              </TextMRoboto>
            </ItemContainer>

            <ItemContainer>
              <BaseIcon statusColor="yellow">
                <Timer size={16} weight="fill" />
              </BaseIcon>
              <TextMRoboto statusColor="base-text">
                Entrega rápida e rastreada
              </TextMRoboto>
            </ItemContainer>

            <ItemContainer>
              <BaseIcon statusColor="purple">
                <Coffee size={16} weight="fill" />
              </BaseIcon>
              <TextMRoboto statusColor="base-text">
                O café chega fresquinho até você
              </TextMRoboto>
            </ItemContainer>
          </ColectionItemContainer>
        </TextContainer>
        <ImageContainer>
          <img src={CoffeeCoup} />
        </ImageContainer>
      </IntroductionContainer>

      <CoffeeContainer>
        <TitleLBaloo statusColor="base-subtitle">Nossos cafés</TitleLBaloo>

        <CoffeeListContainer />
      </CoffeeContainer>
    </HomeContainer>
  );
}
