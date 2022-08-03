import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      
      
      <h5 className="spacetxt">Un poco</h5>
      <h2 className="spacetxt">Acerca de Mi</h2>

      <div className="container about__container">
        <div className="about__me">
 {/*        <div className="about__me-image">
           <img src={ME} alt="Acerca de" />
         </div> 
  */}
        </div>

        <div className="about__content">
        <div className="about__cards space">
          <article className='about__card '>
          <FaAward className='about__icon' />
           <h5>Experiencia</h5>
           <small>+2 años de experiencia en proyectos personales</small>
          </article>  
          <article className='about__card '>
         <FiUsers className='about__icon' />
           <h5>Clientes</h5>
           <small>+10 clientes satisfechos</small>
          </article>
          <article className='about__card'>
          <VscFolderLibrary className='about__icon ' />
           <h5>Proyectos</h5>
           <small>+5 proyectos llevados a cabo</small>
          </article>
          
        </div>

        <p>
          Soy un estudiante de una Lincecitura en Computación y Sistemas enla Universidad Popular Autónoma del Estado de Puebla (UPAEP), con cierta experiencia previa en la programación y diferentes tecnologías, entusiasta por seguir aprendiendo y creciendo en el ambito laboral.  
        </p>
        <a href="#contact" className='btn btn-primary'>Hablemos!</a>
        </div>
      </div>
    </section>
  )
}

export default About
