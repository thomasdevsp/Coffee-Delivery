import styled from "styled-components"
import { defaultTheme } from "../themes/default"

const status_Weight = {
  regular: "regular",
  bold: "bold",
} as const

interface StatusProps {
  statusColor: keyof typeof defaultTheme;
  statusWeight?: keyof typeof status_Weight;
}

//BALOO TEXT DECORATION

const BaseBalooText = styled.span`
  font-family: "Baloo 2", sans-serif;
  line-height: 130%;
`

export const TitleXLBaloo = styled(BaseBalooText)<StatusProps>`
  font-size: 3rem;
  font-weight: bolder;

  color: ${(props) => props.theme[props.statusColor]};
`

export const TitleLBaloo = styled(BaseBalooText)<StatusProps>`
  font-size: 2rem;
  font-weight: bolder;

  color: ${(props) => props.theme[props.statusColor]};
`

export const TitleMBaloo = styled(BaseBalooText)<StatusProps>`
  font-size: 1.5rem;
  font-weight: bolder;

  color: ${(props) => props.theme[props.statusColor]};
`

export const TitleSBaloo = styled(BaseBalooText)<StatusProps>`
  font-size: 1.25rem;
  font-weight: bold;

  color: ${(props) => props.theme[props.statusColor]};
`

export const TitleXSBaloo = styled(BaseBalooText)<StatusProps>`
  font-size: 1.125rem;
  font-weight: bold;

  color: ${(props) => props.theme[props.statusColor]};
`

//ROBOTO TEXT DECORATION
