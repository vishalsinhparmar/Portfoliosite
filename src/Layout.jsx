import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contactus'
import Footer from './components/Footer'
import Projects from './components/Projects'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    
    <>
       <Navbar/>
           <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout