import "./App.css"
import { ThemeProvider } from "@emotion/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import theme from "./styles/theme"
import ChallengePage from "./pages/ChallengePage"
import PixPayment from "./components/PixPayment.component"
import PixCreditCPayment from "./components/PixCreditPayment.component"
import CreditCardPayment from "./components/CreditCardPayment"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ChallengePage />} />
          <Route path='/pix' element={<PixPayment />} />
          <Route path='/pix-credit' element={<PixCreditCPayment />} />
          <Route path='/credit-card' element={<CreditCardPayment />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
