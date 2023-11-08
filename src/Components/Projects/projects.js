import React from 'react';
import projects_data from './projects_data';
import './proj.css'
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const navigate=useNavigate()
    return (
        <div className='projects' id='Projects'> 

        <h2 className='subHeading'>Projects</h2>
       <div className='projects_container' >
            {
                projects_data.slice(0,4).map((proj)=>{return  <ProjectCard key={proj.id} projectItem={proj}
                                                    />
                }
                    
                )
                }
               
       </div>
       
     <button className='view_more' onClick={()=>navigate('/projectslist')}>{`View More Projects >>>`}</button> 
    </div>
    );
}

export default Projects;
