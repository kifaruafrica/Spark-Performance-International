import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Succed from './components/Succed'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
      <Succed />
      <Contact/>
    </>
  )
}

export default App