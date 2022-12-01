import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
  <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>MANSAB MIR</h1>
      <h5 className="text-light">A Full Stack Developer</h5>
      <CTA />
      <Socials/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'> Scroll Down </a>

    </div>
  </header>
  )
}

export default Header