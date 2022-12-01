import React from 'react'
import {FaGithub }from 'react-icons/fa'
import {BsLinkedin }from 'react-icons/bs'
import {BsInstagram} from'react-icons/bs'


const Socials = () => {
  return (
   <div className="header_socials">
    <a href="https://www.linkedin.com/in/themansabmir/" target="_blank" > <FaGithub/> </a>
    <a href="https://github.com/themansabmeer"   target="_blank"> <BsLinkedin/> </a>
    <a href="https://www.instagram.com/themansabmeer/"  target="_blank" ><BsInstagram/> </a>

   </div>
  )
}

export default Socials