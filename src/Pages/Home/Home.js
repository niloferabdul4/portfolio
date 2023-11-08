import React from 'react'
import Intro from '../../Components/Intro/intro'
import Projects from '../../Components/Projects/projects'
import About from '../../Components/About/about'
import Skills from '../../Components/Skills/skills'
import Contact from '../../Components/Contact/contact'
import './home.css'
const Home = () => {
  return (
    <>
       <div className='sections'>         
              <Intro />
              <Projects />
              <About/>
              <Skills />
              <Contact />                   
        </div>
    </>
  )
}

export default Home
