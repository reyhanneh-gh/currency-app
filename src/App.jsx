import { useState } from 'react'
import Header from "./components/Header"
import Converter from "./components/Converter"
import Footer from "./components/Footer"

function App() {
  const [currency, setCurrency] = useState("dollar ($)")
  const [rate, setRate] = useState()
  const [amount, setamount] = useState()
  const [result, setResult] = useState()

  // --------------currency change button--------------

  function currencyChange() {
    if (currency == "dollars ($)") {
      setCurrency("rials (ريال)")
    } else {
      setCurrency("dollars ($)")
    }
  }



  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center content-between bg-gray-800">
      <Header />
      <Converter
        currency={currency}
        currencyChange={currencyChange} />
      <Footer />
    </div>
  )
}

export default App