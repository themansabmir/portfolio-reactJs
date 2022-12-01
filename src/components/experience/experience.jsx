import React from 'react'
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'
const experience = () => {
  return (
    
   
    <section id='experience'> 
    <h5>What skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheck/>
            <h4>HTML</h4>
          </article>
           <article className='experience_details'>
            <BsPatchCheck/>
            <h4>CSS</h4>
          </article>
           <article className='experience_details'>
            <BsPatchCheck/>
            <h4>JAVASCRIPT</h4>
          </article>
           <article className='experience_details'>
            <BsPatchCheck/>
            <h4>BOOTSTRAP</h4>
          </article>
               <article className='experience_details'>
            <BsPatchCheck/>
            <h4>REACT</h4>
          </article>
        </div>


      </div>


{/* end of frontend */}

      <div className="experience_backend">
         <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheck/>
            <h4>NodeJS</h4>
          </article>
           <article className='experience_details'>
            <BsPatchCheck/>
            <h4>MySQL</h4>
          </article>
           <article className='experience_details'>
            <BsPatchCheck/>
            <h4>MongoDB</h4>
          </article>
           <article className='experience_details'>
            <BsPatchCheck/>
            <h4>PHP</h4>
          </article>
               <article className='experience_details'>
            <BsPatchCheck/>
            <h4>JAVA</h4>
          </article>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    </section>
  )
}

export default experience