import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn separa'>Descargar software!</a>
      <a href="#contact" className='btn btn-primary'>Conocenos!</a>
    </div>
  )
}

export default CTA
