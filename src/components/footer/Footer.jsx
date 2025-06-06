import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>OptiStock's</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca De</a></li>
        
        <li><a href="#services">Servicios</a></li>
        
        
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/opti.stock/"><BsInstagram/></a>
        
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Propiedad de OptiStock's Company. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer