import React from 'react';
import projects_data from './projects_data';
import Project from './Project';
import './proj.css'

const Projects = () => {
    return (
        <div className='projects' id='projects'> 

        <h2 className='subHeading'>Projects</h2>
       <div className='projects_container' >
            {
                projects_data.map((proj)=>{return  <Project key={proj.id} projectItem={proj}
                                                    />
                }
                    
                )
                }
               
       </div>
      
    </div>
    );
}

export default Projects;
