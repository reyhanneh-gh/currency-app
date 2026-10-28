import { useState } from 'react'
import Header from "./components/Header"
// import Input from "./components/Input"
// import Output from "./components/Output"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full h-dvh flex flex-wrap justify-center bg-gray-800">
      <Header />
      <Footer />
    </div>
  )
}

export default App