import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>¿Qué habilidades poseo?</h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
           <h3>Desarrollo Frontend</h3>
           <div className="experience__content">
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>HTML</h4>
             <small className='text-light'>Experimentado</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Intermedio</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>JavaScript</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>React</h4>
             <small className='text-light'>Intermedio</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Bootstrap</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Tailwind</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             
           </div>
        </div>
        {/*AQUI TERMINA EL FRONTEND
        <div className="experience__backend">
        <h3>Desarrollo Backend</h3>
           <div className="experience__content">
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Node JS</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>MongoDB</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>PHP</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>MySQL</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Python</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             
             
           </div>
        </div>
*/}
        {/*AQUI TERMINA LA PARTE DE PROGRAMACIÓN*/}

        <div className="experience__diseno">
        <h3>Diseño</h3>
           <div className="experience__content">
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Adobe Premier</h4>
             <small className='text-light'>Avanzado</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Photoshop</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>After Effects</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Adobe Illustrator</h4>
             <small className='text-light'>Principiante</small>
             </div>
             </article>
             <article className='experience__details'>
             <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Canva</h4>
             <small className='text-light'>Avanzado</small>
             </div>
             </article>
             
             
           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
