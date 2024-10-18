import styled from "styled-components";

export const CoffeeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  row-gap: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px 20px 20px;

  border-radius: 6px 36px 6px 36px;

  max-width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme["base-card"]};

  img {
    max-width: 120px;
    height: 120px;

    position: relative;
    bottom: 20px;
  }
`;

export const PropsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 8px;
`;

export const MarketContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 24px;
  gap: 8px;

  .Flex {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const PaymentItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  margin-left: 15px;

  .Minus {
    border-radius: 6px 0 0 6px;
  }

  .Plus {
    border-radius: 0 6px 6px 0;
  }

  span {
    max-width: 2rem;
    padding: 8.5px;

    border: none;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme["base-title"]};

    background: ${(props) => props.theme["base-button"]};
  }
`;

export const InputButtons = styled.button`
  display: flex;
  align-items: center;
  border: none;

  height: 2.375rem;
  padding: 7.9px;

  color: ${(props) => props.theme["purple"]};
  background: ${(props) => props.theme["base-button"]};
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s;
    color: ${(props) => props.theme["purple-dark"]};
    scale: 1.1;
    cursor: pointer;
  }
`;

export const MarketButton = styled.div`
  display: flex;
  border: none;

  border-radius: 6px;
  padding: 8px;

  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["white"]};
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s;
    background: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;
