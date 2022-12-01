import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

import './footer.css'
const footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'> Mir</a>
    <ul className='permaLinks'>
      <li> <a href=""> HOME</a>  </li>
      <li> <a href=""> ABOUT</a>  </li>
      <li> <a href=""> EXPERIENCE</a>  </li>
      <li> <a href=""> CONTACT</a>  </li>
      
    </ul>
<div className='footer_socials' >
  <a href=""> <FaFacebook/> </a>
  <a href=""><FiInstagram/> </a>
  <a href=""><IoLogoTwitter/> </a>

</div>

   </footer>
  )
}

export default footer