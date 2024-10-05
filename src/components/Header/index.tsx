import Logo from "../../assets/introduction/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  ActionsContainer,
  HeaderContainer,
  Location,
  MarketCar,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} />
      </div>

      <ActionsContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <MarketCar>
          <ShoppingCart size={22} weight="fill" />
        </MarketCar>
      </ActionsContainer>
    </HeaderContainer>
  );
}
