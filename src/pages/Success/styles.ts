import styled from "styled-components";

export const ContentContainer = styled.main`
  display: grid;
  grid-template-columns: auto auto;

  gap: 2.5rem;
  width: 100%;
  padding: 5rem 10rem 0 10rem;

  img {
    grid-area: 2 / 2 / span 1 / span 1;
  }
`;

export const TittleContainer = styled.div``;
export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  grid-area: 2 / 1 / span 1 / span 1;

  gap: 2rem;
  max-width: 526px;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme["purple"]};
  border-radius: 6px 36px 6px 36px;
`;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
