import { useState } from 'react'
import Header from "./components/Header"
import Converter from "./components/Converter"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center content-between bg-gray-800">
      <Header />
      <Converter />
      <Footer />
    </div>
  )
}

export default App