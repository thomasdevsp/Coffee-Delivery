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
  SubPrice,
  SubTitle,
  SubValues,
  TextContainer,
  TotalPrice,
  ValueContainer,
} from "./styles";
import { CompactCardCoffee } from "../../components/CompactCardCoffee";
import { NavLink } from "react-router-dom";

export function Checkout() {
  return (
    <ContentContainer>
      <CheckOutContainer>
        <h2>Complete seu Pedido</h2>

        <FormContainer>
          <TextContainer statusColor="yellow">
            <MapPinLine size={22} weight="regular" />

            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
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
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
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
        <h2>Cafés selecionados</h2>

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
              <SubTitle>Total de Itens</SubTitle>
              <SubPrice>R$ 29,70</SubPrice>
            </SubValues>
            <SubValues>
              <SubTitle>Entrega</SubTitle>
              <SubPrice>R$ 3,90</SubPrice>
            </SubValues>
            <TotalPrice>
              <span>Total</span>
              <span>R$ 33,20</span>
            </TotalPrice>
          </ValueContainer>

          <ConfirmButton>
            <NavLink to="/Success">Confirmar Pedido</NavLink>
          </ConfirmButton>
        </CoffeePaymentListContainer>
      </SelectedCoffeeContainer>
    </ContentContainer>
  );
}
