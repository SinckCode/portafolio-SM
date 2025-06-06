import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Imagenes from './components/imagenes/Imagenes'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Imagenes />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
