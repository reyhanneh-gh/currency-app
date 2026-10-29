import { useState } from 'react'
import Header from "./components/Header"
import Converter from "./components/Converter"
import Footer from "./components/Footer"

function App() {
  const [currency, setCurrency] = useState("dollars ($)")
  const [rate, setRate] = useState("")
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState("")

  // --------------currency change button--------------

  function currencyChange() {
    setResult("")
    if (currency == "dollars ($)") {
      setCurrency("rials (ريال)")
    } else {
      setCurrency("dollars ($)")
    }
  }
  // ---------------------calculation---------------------
  function calculate() {
    setResult("")
    if (currency == "dollars ($)") {
      setResult(amount * rate * 10000)
    } else if (currency == "rials (ريال)" && rate > 0) {
      setResult((amount / rate) * 10000)
    } else if (rate == 0) {
      setResult("Invalid rate")
    }
    console.log("test");

  }

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center content-between bg-gray-800">
      <Header />

      <Converter
        currency={currency}
        currencyChange={currencyChange}
        rate={rate}
        setRate={setRate}
        amount={amount}
        setAmount={setAmount}
        setResult={setResult}
        calculate={calculate}
        result={result}
      />

      <Footer />
    </div>
  )
}
export default App