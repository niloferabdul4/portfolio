import React from 'react';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Projects from './Components/Projects/projects';
import Resume from './Components/Resume/resume';
import Menubar from './Components/MenuBar/Menubar';
import './app.css';
import Footer from './Components/Footer/Footer';
import app from './firebase/firebase';


function App() {
    return (
      <div className="app">
        <Header />
        <Menubar />
        <div className='sections'>
         
              <Intro />
              <Projects />
              <About/>
              <Skills />
              <Contact />
              <Resume />   
              <Footer />
                     
        </div>
      </div>
     
    );
}

export default App;
