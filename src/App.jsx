import { useState } from 'react'
import Header from "./components/Header"
import Converter from "./components/Converter"
import Footer from "./components/Footer"

function App() {
  const [currency, setCurrency] = useState("$")
  const [rate, setRate] = useState("")
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState("")

  // --------------currency change button--------------

  function currencyChange() {
    setResult("")
    if (currency == "$") {
      setCurrency("ريال")
    } else {
      setCurrency("$")
    }
  }
  // ---------------------calculation---------------------
  function calculate() {
    setResult("")
    if (rate <= 0 || rate === "") {
      setResult("Invalid rate")
      return
    }
    if (amount === "") {
      setResult("Invalid amount")
      return
    }
    if (currency === "$") {
      setResult(amount * rate * 10000)
    } else {
      setResult(amount / rate)
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