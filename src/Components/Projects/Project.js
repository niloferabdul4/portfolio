import React from 'react';
import './proj.css'

const Project = ({project}) => {
  
    return (
        <>          
     
        <div className='proj_card'>
         <h3 className='proj_title'>{project.title}</h3>
         <img src={project.image} alt='' className='proj_image'/>
         <div className='proj_details'>
            <p>{project.description}</p>
            <a href={project.url}>{project.url}</a>
         </div>
        
        </div>


        </>
    );
}

export default Project;
