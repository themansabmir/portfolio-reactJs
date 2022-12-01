import React from 'react'
import Header from './components/Header/Header'
import About from './components/about/about'
import Contact from './components/Contact/Contact'

import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
// import Services from './components/services/services'
// import Testimonials from './components/Testimonials/Testimonials'
// import Portfolio from './components/Portfolio/Portfolio'




const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
           
            <Contact />
            <Footer />

        </>
    )
}

export default App