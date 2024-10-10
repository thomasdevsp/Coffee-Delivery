import ExpressoTradicional from "../../assets/coffee/Type=Expresso.png";
import ExpressoAmericano from "../../assets/coffee/Type=Americano.png";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import {
  CheckOutContainer,
  CoffeePaymentListContainer,
  ConfirmButton,
  ContentContainer,
  FormContainer,
  InputContainer,
  InputForm,
  PaymentMethodContainer,
  PaymentSelectContainer,
  SelectedCoffeeContainer,
  Separator,
  SubValues,
  TextContainer,
  TotalPrice,
  ValueContainer,
} from "./styles";
import { CompactCardCoffee } from "../../components/CompactCardCoffee";
import { NavLink } from "react-router-dom";
import { TitleXSBaloo } from "../../styles/texts/tittleThemes";
import {
  TextLRoboto,
  TextMRoboto,
  TextSRoboto,
} from "../../styles/texts/textThemes";

export function Checkout() {
  return (
    <ContentContainer>
      <CheckOutContainer>
        <TitleXSBaloo statusColor="base-subtitle">
          Complete seu Pedido
        </TitleXSBaloo>

        <FormContainer>
          <TextContainer statusColor="yellow">
            <MapPinLine size={22} weight="regular" />

            <div>
              <TextMRoboto statusColor="base-subtitle">
                Endereço de Entrega
              </TextMRoboto>
              <TextSRoboto statusColor="base-text">
                Informe o endereço onde deseja receber seu pedido
              </TextSRoboto>
            </div>
          </TextContainer>

          <InputContainer>
            <InputForm type="text" placeholder="CEP" className="CEP" />
            <InputForm type="text" placeholder="Rua" className="Rua" />
            <InputForm type="text" placeholder="Número" className="Numero" />
            <InputForm
              type="text"
              placeholder="Complemento"
              className="Complemento"
            />
            <InputForm type="text" placeholder="Bairro" className="Bairro" />
            <InputForm type="text" placeholder="Cidade" className="Cidade" />
            <InputForm type="text" placeholder="UF" className="UF" />
          </InputContainer>
        </FormContainer>

        <PaymentSelectContainer>
          <TextContainer statusColor="purple">
            <CurrencyDollar size={22} weight="regular" />

            <div>
              <TextMRoboto statusColor="base-subtitle">Pagamento</TextMRoboto>
              <TextSRoboto statusColor="base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextSRoboto>
            </div>
          </TextContainer>

          <PaymentMethodContainer>
            <input type="radio" name="payment" id="creditCard" />
            <label htmlFor="creditCard">
              <CreditCard size={16} weight="regular" />
              <span>CARTÃO DE CREDITO</span>
            </label>

            <input type="radio" name="payment" id="debitCard" />
            <label htmlFor="debitCard">
              <Bank size={16} weight="regular" />
              <span>CARTÃO DE DÉBITO</span>
            </label>

            <input type="radio" name="payment" id="cash" />
            <label htmlFor="cash">
              <Money size={16} weight="regular" />
              <span>DINHEIRO</span>
            </label>
          </PaymentMethodContainer>
        </PaymentSelectContainer>
      </CheckOutContainer>

      <SelectedCoffeeContainer>
        <TitleXSBaloo statusColor="base-subtitle">
          Cafés Selecionados
        </TitleXSBaloo>

        <CoffeePaymentListContainer>
          <CompactCardCoffee
            title="Expresso Tradicional"
            image={ExpressoTradicional}
          />

          <Separator />

          <CompactCardCoffee
            title="Expresso Americano"
            image={ExpressoAmericano}
          />

          <Separator />

          <ValueContainer>
            <SubValues>
              <TextSRoboto statusColor="base-text">Total de Itens</TextSRoboto>
              <TextMRoboto statusColor="base-text">R$ 29,70</TextMRoboto>
            </SubValues>
            <SubValues>
              <TextSRoboto statusColor="base-text">Entrega</TextSRoboto>
              <TextMRoboto statusColor="base-text">R$ 3,90</TextMRoboto>
            </SubValues>
            <TotalPrice>
              <TextLRoboto statusColor="base-subtitle">Total</TextLRoboto>
              <TextLRoboto statusColor="base-subtitle">R$ 33,20</TextLRoboto>
            </TotalPrice>
          </ValueContainer>

          <NavLink to="/Success">
            <ConfirmButton>Confirmar Pedido</ConfirmButton>
          </NavLink>
        </CoffeePaymentListContainer>
      </SelectedCoffeeContainer>
    </ContentContainer>
  );
}
