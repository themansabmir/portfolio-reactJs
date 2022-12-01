import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const about = () => {
  return (
  <section id='about'>
    <h5>Get to Know</h5>
    <h2>ABOUT ME</h2>
<div className="container about_container">
  <div className="about_me">
    <div className="aboutmeImg">
      <img src={ME} alt="" />
    </div>
  </div>

  <div className='about_content'>
    <div className="about_cards">
      <article className="about_card">
        <TbAward className='about_icon' />
        <h5>EXPERIENCE</h5>
        <small>2+ Years Working</small>

      </article>


       <article className="about_card">
        <FiUsers className='about_icon' />
        <h5>CLIENTS</h5>
        <small>200+ WORLDWIDE</small>

      </article>


       <article className="about_card">
        <VscFolder className='about_icon' />
        <h5>PROJECTS</h5>
        <small>20+ COMPLETED</small>

      </article>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi esse voluptas magni, voluptatum molestias asperiores veritatis quis unde eligendi quibusdam exercitationem doloribus iusto repudiandae! Inventore fugit ab quis pariatur enim?
    </p>
    <a href="#contact" className='btn btn-primary'>LET'S TALK</a>
  </div>
  
  
  
   </div>
  </section>
  )
}

export default about