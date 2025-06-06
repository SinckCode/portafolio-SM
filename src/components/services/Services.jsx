import React from 'react'
import './Servicess.css'
import {BiCheck}from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que ofrecemos</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> Gestión Multi Almacenes </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Descripción detallada y beneficios.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Imágenes o gráficos ilustrativos.</p>
            </li>
           
            
            
          </ul>
        </article>
      

      {/*FIN DE UI/UX*/}

      
        <article className="service">
          <div className="service__head">
            <h3> Análisis ABC Automatizado</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Descripción de cómo OptiStock realiza el análisis ABC y por qué es crucial.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Casos de uso y escenarios prácticos.</p>
            </li>
            
            
            
          </ul>
        </article>
     

      {/* FIN DE WEB DEVELOPMENT*/}
      
        <article className="service">
          <div className="service__head">
            <h3>Notificaciones Inteligentes</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Explicación de cómo las notificaciones proactivas mejoran la toma de decisiones.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Testimonios de clientes que han experimentado beneficios.</p>
            </li>
            
            
            
          </ul>
        </article>

        {/* FIN DE WEB DEVELOPMENT*/}
      
        <article className="service">
          <div className="service__head">
            <h3>Integración de Dispositivos de Escaneo</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Información sobre la facilidad de integración con dispositivos de escaneo.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Ejemplos de cómo esta característica mejora la precisión.</p>
            </li>
            
            
            
          </ul>
        </article>
      </div>

      {/*FIN DE Desarrollo de Contenido*/}
    </section>
  )
}

export default Services
