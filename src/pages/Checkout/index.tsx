import { NavLink } from "react-router-dom"
import { useCartContext } from "../../contexts/cartContext/useCartContext"
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
  SubValues,
  TextContainer,
  TotalPrice,
  ValueContainer,
} from "./styles"
import { CompactCardCoffee } from "./components/CompactCardCoffee"
import { TitleXSBaloo } from "../../styles/texts/tittleThemes"
import {
  TextLRoboto,
  TextMRoboto,
  TextSRoboto,
} from "../../styles/texts/textThemes"

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react"

export function Checkout() {
  const { filteredCoffeeList } = useCartContext()

  const totalItens = filteredCoffeeList.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity
  }, 0)

  const frete = totalItens / 7

  const totalCart = totalItens + frete

  return (
    <ContentContainer  >
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
            <InputForm type="text"
            placeholder="CEP"
            className="CEP"/>

            <InputForm type="text"
            placeholder="Rua"
            className="Rua" />

            <InputForm type="text"
            placeholder="Número"
            className="Numero" />
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
          {filteredCoffeeList.map((coffee) => (
            <CompactCardCoffee
              key={coffee.id}
              data={coffee}
            />
          ))}

          <ValueContainer>
            <SubValues>
              <TextSRoboto statusColor="base-text">Total de Itens</TextSRoboto>
              <TextMRoboto statusColor="base-text">
                R$ {totalItens.toFixed(2).replace(".", ",")}
              </TextMRoboto>
            </SubValues>
            <SubValues>
              <TextSRoboto statusColor="base-text">Entrega</TextSRoboto>
              <TextMRoboto statusColor="base-text">
                R$ {frete.toFixed(2).replace(".", ",")}
              </TextMRoboto>
            </SubValues>
            <TotalPrice>
              <TextLRoboto statusColor="base-subtitle">Total</TextLRoboto>
              <TextLRoboto statusColor="base-subtitle">
                R$ {totalCart.toFixed(2).replace(".", ",")}
              </TextLRoboto>
            </TotalPrice>
          </ValueContainer>

          <NavLink to="/Success">
            <ConfirmButton type="submit"  disabled={totalCart === 0 ? true : false}>Confirmar Pedido</ConfirmButton>
          </NavLink>
        </CoffeePaymentListContainer>
      </SelectedCoffeeContainer>
    </ContentContainer>
  )
}
