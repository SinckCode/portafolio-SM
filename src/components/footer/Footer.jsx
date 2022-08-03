import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sinck's</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca De</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/sinck__/"><BsInstagram/></a>
        <a href="https://github.com/SinckCode"><AiOutlineGithub/></a>
        <a href="https://instabio.cc/21016nvJy6G"><BiWorld/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Propiedad de Sinck's Company. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer