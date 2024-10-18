import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global/global"
import {  CortContextProvider } from "./contexts/cartContext/CortContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CortContextProvider>
          <Router />
        </CortContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
