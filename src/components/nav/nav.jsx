import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'



const Nav = () => {
const [nav,setNav]= useState('#')



  return (
    <nav>
      <a href="#" onClick={()=> setNav('#')} className={nav==='#' ? 'active': ''} > <AiOutlineHome/>  </a>
      <a href="#about" onClick={()=> setNav('#about')} className={nav==='#about' ? 'active': ''}> <AiOutlineUser/> </a>
      <a href="#services"
      onClick={()=> setNav('#services')} 
      className={nav==='#services' ? 'active': ''}
      > <AiOutlineSetting/> </a>
      <a href="#experience"   onClick={()=> setNav('#experience')} 
      className={nav==='#experience' ? 'active': ''} > <AiOutlineBook/> </a>
      <a href="#contact"  onClick={()=> setNav('#contact')} 
      className={nav==='#contact' ? 'active': ''}> <AiOutlineContacts/> </a>
    </nav>
  )
}

export default Nav