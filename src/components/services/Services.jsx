import React from 'react'
import './Servicess.css'
import {BiCheck}from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> Diseño </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Diseños para cualquier Red Social (Animados).</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Diseños de páginas WEB.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Diseño de imagen corporativa para Negocios.</p>
            </li>
            
            
          </ul>
        </article>
      

      {/*FIN DE UI/UX*/}

      
        <article className="service">
          <div className="service__head">
            <h3> Desarrollo WEB</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Construcción y programación de Páginas Web</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Optimización de Páginas Web.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Rediseño y Contrucción de Páginas Web.</p>
            </li>
            
            
          </ul>
        </article>
     

      {/* FIN DE WEB DEVELOPMENT*/}
      
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Contenido</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Creación de Contenido para Redes Sociales.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>TikToks, Insta Reel, Youtube y Video Profesional.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Servicio de Community y Content Manager. </p>
            </li>
            
            
          </ul>
        </article>
      </div>

      {/*FIN DE Desarrollo de Contenido*/}
    </section>
  )
}

export default Services
