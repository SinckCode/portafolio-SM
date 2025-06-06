import React from 'react'
import './Header.css'
import CTA from './CTA'
/*import ME from '../../assets/me.png'*/
import HeaderSocials from './HeaderSocials'
import {AiFillDownCircle} from 'react-icons/ai'
import Videofondo from "../../video/videofondo.mp4"
import IMG1 from '../../assets/fondo.jpg'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <div className="texto">
       
       <h1>OPTISTOCK<span>&#160;</span></h1>
      
       </div>
       {/** 
        <video autoPlay loop muted className='videofondo'>
        <source src={Videofondo} type="video/mp4" />
      </video>
      */}
      <img className='fondo' src={IMG1} alt="" />
      <CTA />

      <HeaderSocials />
{/*
      <div className="me">
        <img src={ME} alt="" />
      </div>
*/}      
      <a href="#contact" className='scroll__down'><AiFillDownCircle/></a>
     </div>
   </header>
  )
}

export default Header
