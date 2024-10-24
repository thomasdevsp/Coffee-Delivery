import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layout/DefaultLayout"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { Success } from "./pages/Success"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  )
}
