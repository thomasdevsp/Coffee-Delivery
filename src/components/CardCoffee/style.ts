import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;

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
    border-radius: 100px;
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const MarketContainer = styled.div`
  display: flex;
  align-items: center;
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

export const InputButtons = styled.button`
  height: 2.375rem;
  border: none;
  padding: 7.9;

  background: ${(props) => props.theme["base-button"]};
`;

export const PaymentItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 72px;
  margin-left: 15px;

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

export const MarketButton = styled.div`
  border: none;

  border-radius: 6px;
  padding: 8px;

  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["white"]};
`;
