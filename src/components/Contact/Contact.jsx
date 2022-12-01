import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_goas5uq', 'template_yr6t7sn', form.current, 'tENNbS9m6Ai93YRC_')
     .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

   e.target.reset()
   
    }
      


  return (
    <section id='contact'> 
    <h5>get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
          <h4>Email: </h4>
          <h5>mansabmirsde@gmail.com</h5>
          <a href="mailto:mansabmirsde@gmail.com"> Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required />
        <input type="email" name="email" id="" placeholder='Your Email' required />
        <textarea name="message" id=""  rows="10" placeholder='Send Message'></textarea>
        <button type='submit' className="btn btn-primary">Send</button>
      </form>





    </div>
    </section>
  )
}

export default Contact