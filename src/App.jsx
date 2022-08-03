import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portafolio from './components/Portafolio/Portafolio'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
