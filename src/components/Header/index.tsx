import Logo from "../../assets/introduction/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  ActionsContainer,
  HeaderContainer,
  Location,
  MarketCar,
} from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>

      <ActionsContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <MarketCar>
          <NavLink to="/Checkout" title="Carrinho de Compras">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </MarketCar>
      </ActionsContainer>
    </HeaderContainer>
  );
}
