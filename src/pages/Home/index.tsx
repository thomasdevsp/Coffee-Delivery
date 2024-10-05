import {
  BaseIcon,
  CoffeeContainerList,
  ColectionItemContainer,
  HomeContainer,
  ImageContainer,
  IntroductionContainer,
  ItemContainer,
  TextContainer,
} from "./styles";
import CoffeeCoup from "../../assets/introduction/Imagem.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CardCoffee } from "../../components/CardCoffee";

import ExpressoTradicional from "../../assets/coffee/Type=Expresso.png";

export function Home() {
  return (
    <HomeContainer>
      <IntroductionContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>

          <ColectionItemContainer>
            <ItemContainer>
              <BaseIcon statusColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </BaseIcon>
              <span>Compra simples e segura</span>
            </ItemContainer>

            <ItemContainer>
              <BaseIcon statusColor="gray">
                <Package size={16} weight="fill" />
              </BaseIcon>
              <span>Embalagem mantém o café intacto</span>
            </ItemContainer>

            <ItemContainer>
              <BaseIcon statusColor="yellow">
                <Timer size={16} weight="fill" />
              </BaseIcon>
              <span>Entrega rápida e rastreada</span>
            </ItemContainer>

            <ItemContainer>
              <BaseIcon statusColor="purple">
                <Coffee size={16} weight="fill" />
              </BaseIcon>
              <span>O café chega fresquinho até você</span>
            </ItemContainer>
          </ColectionItemContainer>
        </TextContainer>
        <ImageContainer>
          <img src={CoffeeCoup} />
        </ImageContainer>
      </IntroductionContainer>

      <CoffeeContainerList>
        <h2>Nossos cafés</h2>
        <CardCoffee
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          image={ExpressoTradicional}
        />
      </CoffeeContainerList>
    </HomeContainer>
  );
}
