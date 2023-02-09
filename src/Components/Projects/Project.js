import React from 'react';
import './proj.css'


const Project = ({project}) => {
  
    return (
        <>          
        <div className='proj_card'>
            <div className='image_container'>
                <h3 className='proj_title'>{project.title}</h3>
                <img src={project.image} alt='' className='proj_image'/>
            </div>        
            <div className='info_container'>
                <p>{project.description}</p>
                <button className='source_btn'>                
                    <a href={project.url}>Source</a>
                </button>            
            </div>            
        </div>
        </>
    );
}

export default Project;
