import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global/global"
import {  CartListContextProvider } from "./contexts/cartContext/CartListContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartListContextProvider>
          <Router />
        </CartListContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
