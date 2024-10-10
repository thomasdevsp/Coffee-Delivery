import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px 20px 20px;

  border-radius: 6px 36px 6px 36px;

  max-width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme["base-card"]};

  .Tag {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};

    padding: 4px;
    margin-bottom: 10px;
    border-radius: 100px;
  }

  img {
    max-width: 120px;
    height: 120px;

    position: relative;
    bottom: 20px;
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-family: "Roboto", sans-serif;

    text-align: center;
    font-size: 0.875rem;

    color: ${(props) => props.theme["base-label"]};
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

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }

  b {
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
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
