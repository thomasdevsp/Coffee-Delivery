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

const BaseRobotoText = styled.span`
  font-family: "Roboto", sans-serif;
  line-height: 130%;
`

export const TextLRoboto = styled(BaseRobotoText)<StatusProps>`
  font-size: 1.25rem;

  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`

export const TextMRoboto = styled(BaseRobotoText)<StatusProps>`
  font-size: 1rem;

  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`

export const TextSRoboto = styled(BaseRobotoText)<StatusProps>`
  font-size: 0.875rem;

  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`

export const TextXSRoboto = styled(BaseRobotoText)<StatusProps>`
  font-size: 0.75rem;

  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`

export const Tag = styled(BaseRobotoText)<StatusProps>`
  text-transform: uppercase;

  font-size: 0.625rem;
  padding: 4px;
  margin-bottom: 10px;
  border-radius: 100px;

  background: ${(props) => props.theme["yellow-light"]};
  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`
export const ButtonG = styled(BaseRobotoText)<StatusProps>`
  font-size: 0.75rem;
  line-height: 160%;

  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`
export const ButtonM = styled(BaseRobotoText)<StatusProps>`
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  font-weight: ${(props) => props.statusWeight};
  color: ${(props) => props.theme[props.statusColor]};
`
