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
      <h2 className="spacetxt">Acerca de Nosotros</h2>

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
           <small>+2 años de desarrollo y optimización continua</small>
          </article>  
          <article className='about__card '>
         <FiUsers className='about__icon' />
           <h5>Clientes</h5>
           <small>Satisfaciendo a empresas</small>
          </article>
          <article className='about__card'>
          <VscFolderLibrary className='about__icon ' />
           <h5>Proyectos</h5>
           <small>+5 proyectos llevados a cabo</small>
          </article>
          
        </div>

        <p>
        OptiStock, la solución integral para el control de inventarios que impulsa tu negocio hacia la eficiencia y la rentabilidad. Con OptiStock, experimenta la gestión de almacenes de próxima generación, ofreciendo análisis ABC automatizados, integración de dispositivos de escaneo y la capacidad de acceder a tus datos desde cualquier dispositivo. Aprovecha la potencia de la optimización y haz que cada movimiento cuente. ¡OptiStock, donde la eficiencia encuentra su nombre en cada estante!        </p>
        <a href="#contact" className='btn btn-primary'>Hablemos!</a>
        </div>
      </div>
    </section>
  )
}

export default About
