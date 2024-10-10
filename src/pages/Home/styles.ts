import styled from "styled-components";
import background from "../../assets/introduction/Background.png";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;

  padding: 6.25rem 10rem;
  width: 100%;

  background-image: url(${background});
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  max-width: 38rem;
`;

export const ColectionItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  margin-top: 4.125rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 19rem;

  gap: 12px;
`;

export const ImageContainer = styled.div`
  img {
    max-width: 623px;
    height: 471px;
  }
`;

const STATUS_COLORS = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const BaseIcon = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 2rem;

  padding: 8px;
  border-radius: 100%;

  color: ${(props) => props.theme["background"]};
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`;

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.325rem;
  width: 100%;
  padding: 2rem 10rem;
`;
