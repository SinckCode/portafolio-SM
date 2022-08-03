import React from 'react'
import './Portafolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/FotoSMblanco.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Clone de Amazon',
    github: 'https://github.com/SinckCode/AmazonClone.git',
    demo: 'https://clone-eca80.web.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Programas Hechos',
    github: 'https://github.com/SinckCode/ProgramasEscuela.git',
    demo: 'https://github.com/SinckCode/ProgramasEscuela.git'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Página Comercial SM',
    github: 'https://github.com/SinckCode/portafolio-SM',
    demo: 'https://portafolio-sm.web.app/'
  },
  
]


const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>M trabajo mas reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Ver el Proyecto</a>
            </div>
        </article>
          )
        })
      }      
    
      </div>
    </section>
  )
}

export default Portafolio
