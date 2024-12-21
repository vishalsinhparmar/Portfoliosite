import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contactus'
import Footer from './components/Footer'

function Layout() {
  return (
    
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default Layout