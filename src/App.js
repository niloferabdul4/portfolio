import React from 'react';
 import  ReactDOM  from 'react-dom';


import './Portfolio Website/Header/header'
import Header from './Portfolio Website/Header/header';


import './Portfolio Website/Intro/intro'
import Intro from './Portfolio Website/Intro/intro';

import './Portfolio Website/About/about'
import About from './Portfolio Website/About/about';

import './Portfolio Website/Skills/skills'
import Skills from './Portfolio Website/Skills/skills';



import './Portfolio Website/portfolio.css'



import Sidebar from './Portfolio Website/SideBar/sidebar';
import './Portfolio Website/SideBar/sidebar'


import './Portfolio Website/Contact/contact'
import Contact from './Portfolio Website/Contact/contact';


import './Portfolio Website/Projects/projects'
import Projects from './Portfolio Website/Projects/projects';

import Resume from './Portfolio Website/Resume/resume';


import Education from './Portfolio Website/Education/education';



import { Route,BrowserRouter,Routes} from 'react-router-dom';
 

function App() {


    return (
      <div className="App">
     <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
                <Route path='/' element={<Intro />}  />
                <Route path='/about' element={<About />}  />
                <Route path='/skills' element={<Skills/>}   />
                <Route path='/projects' element={<Projects/>}  />
                <Route path='/education' element={<Education />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={< Contact />}  />
         </Routes>
       
        
     </BrowserRouter>
      </div>
    );
}
ReactDOM.render(<App />,document.getElementById('root'))

export default App;
