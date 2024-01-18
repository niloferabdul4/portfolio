import React from 'react'
import Intro from '../../Components/Intro/intro'
import Projects from '../../Components/Projects/projects'
import Skills from '../../Components/Skills/skills'
import Contact from '../../Components/Contact/contact'
import './home.css'
import Header from '../../Components/Header/header'
import Menubar from '../../Components/MenuBar/Menubar'
const Home = () => {
  return (
    <>
       <Header />
        <Menubar />
       <div className='sections'>         
              <Intro />
              <Projects />
              <Skills />
              <Contact />                   
        </div>
    </>
  )
}

export default Home
