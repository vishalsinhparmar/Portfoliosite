import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homecomponets from './components/Homecomponets'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contactus'
import Skills from './components/Skill'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
         <Routes>
             <Route path="/" element ={<Layout/>}>
               <Route index element ={<Homecomponets/>}/> 
               <Route path ="services" element ={<Services/>}/> 
               <Route path ="about" element ={<About/>}/> 
               <Route path ="Skills" element ={<Skills/>}/> 

               Skills
               <Route path ="project" element ={<Projects/>}/> 
               <Route path ="contact" element ={<Contact/>}/> 
             </Route>
        </Routes>
        </Router>
  </StrictMode>,
)
