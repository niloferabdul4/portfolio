import React from 'react';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Projects from './Components/Projects/projects';
import Education from './Components/Education/education';
import Resume from './Components/Resume/resume';
import './portfolio.css';

 

function App() {

    return (
      <div className="App">
        <Header />
        <div className='sections'>
           <Intro />
           <About />
           <Skills />
           <Projects />
           <Education />
           <Resume />
           <Contact />
        </div>
      
            
        
      </div>
     
    );
}

export default App;
