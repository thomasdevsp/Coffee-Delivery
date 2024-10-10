import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  border-radius: 6px 36px 6px 36px;

  max-width: 23rem;

  img {
    max-width: 70px;
    height: 64px;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-weight: regular;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Price = styled.span`
  font-size: 0.875rem;

  font-family: "Roboto", sans-serif;
  text-align: right;
  font-weight: bold;

  color: ${(props) => props.theme["base-text"]};
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 8px;
`;

export const PropsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
`;

export const ControllerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CounterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

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

export const TrashButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;

  border-radius: 6px;
  padding: 8px;

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["purple"]};
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s;
    background: ${(props) => props.theme["base-hover"]};
    cursor: pointer;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    line-height: 0;
    color: ${(props) => props.theme["base-text"]};
  }
`;
