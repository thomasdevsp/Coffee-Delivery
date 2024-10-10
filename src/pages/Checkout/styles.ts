import styled from "styled-components";

export const ContentContainer = styled.main`
  display: grid;
  grid-template: auto / auto 29rem;
  justify-content: space-around;

  width: 100%;
  padding: 2.5rem 10rem 0 10rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    text-align: left;

    font-size: 1.125rem;
  }
`;

export const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span,
  p {
    font-family: "Roboto", sans-serif;
    text-align: left;
  }

  span {
    font-size: 1rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

const STATUS_COLORS = {
  yellow: "yellow",
  purple: "purple",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const TextContainer = styled.div<StatusProps>`
  display: flex;
  align-items: left;
  gap: 8px;

  svg {
    color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  max-width: 37.5rem;
  gap: 1rem;
  grid-template-columns: auto auto 3.75rem;

  .CEP {
    grid-area: 1 / 1 / span 1 / span 4;
    width: 25%;
  }

  .Rua {
    grid-area: 2 / 1 / span 1 / span 4;
  }

  .Numero {
    grid-area: 3 / 1 / span 1 / span 1;
  }

  .Complemento {
    grid-area: 3 / 2 / span 1 / span 3;
  }

  .Cidade {
    grid-area: 4 / 2 / span 1 / auto;
    width: 100%;
  }
`;

export const InputForm = styled.input`
  font-family: "Roboto", sans-serif;
  font-weight: Regular;
  border: 1px solid ${(props) => props.theme["base-button"]};

  border-radius: 4px;
  font-size: 0.875rem;
  padding: 12px;

  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-input"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const PaymentSelectContainer = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;

  input[type="radio"] {
    -webkit-appearance: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;

    background-color: ${(props) => props.theme["base-button"]};

    span {
      font-family: "Roboto", sans-serif;

      font-size: 12px;

      color: ${(props) => props.theme["base-text"]};
    }

    svg {
      color: ${(props) => props.theme["purple"]};
    }

    &:hover {
      cursor: pointer;

      transition: all 0.2s;

      background: ${(props) => props.theme["base-hover"]};
    }
  }

  input[type="radio"]:checked + label {
    transition: all 0.2s;
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CoffeePaymentListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  max-width: 28.75rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme["base-card"]};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;

  background: ${(props) => props.theme["base-button"]};
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  width: 100%;
`;

export const SubValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BaseText = styled.span`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["base-text"]};
  font-weight: regular;
`;

export const SubTitle = styled(BaseText)`
  font-size: 14px;
`;

export const SubPrice = styled(BaseText)`
  font-weight: 500;
  font-size: 1rem;
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtittle"]};
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const ConfirmButton = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme["yellow"]};

  padding-block: 12px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
  }

  &:hover {
    cursor: pointer;

    transition: all 0.2s;

    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
