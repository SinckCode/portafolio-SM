import React, { useRef } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m9w7wwm', 'template_ryuenca', form.current, 'f3miXzQ6E7d-ctWBE')
    
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Ponte en Contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Correo</h4>
            <h5>soyangeldavid1@gmail.com</h5>
            <a href="mailto:soyangeldavid1@gmail.com" target="_blank">Enviar un correo</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Angel David</h5>
            <a href="https://m.me/soyangeldavid3" target="_blank">Enviar un mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+524621581879</h5>
            <a href="https://api.whatsapp.com/send?phone=5214621581879" target="_blank">Envia un Whats</a>
          </article>
        </div>
        {/*FIN DE LA OPCION DE CONTACTO*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Tu Nombre Completo' required />
          <input type="email" name="email" id="" placeholder='Tu Email' required />
          <textarea name="message" id="" rows="7" placeholder='Tu Mensaje' required></textarea>
           <button type='submit' className='btn btn-primary'>Envia tu Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
