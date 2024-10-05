import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
  padding: 2rem 10rem;

  img {
    width: 5.313rem;
    height: 2.5rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  gap: 4px;
  padding: 8px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;

  color: ${(props) => props.theme["purple-dark"]};
  background: ${(props) => props.theme["purple-light"]};
`;

export const MarketCar = styled.div`
  padding: 8px;
  border-radius: 6px;

  color: ${(props) => props.theme["yellow"]};
  background: ${(props) => props.theme["yellow-light"]};
`;
