import React from 'react';
import './proj.css'


const Project = ({projectItem}) => {
  
    return (
        <>          

      <div className="proj_card">          
                <div className="image_container">
                        <h4 className='proj_title'>{projectItem.title}</h4>
                        <img src={projectItem.image} alt='' className='proj_image'/>
                </div>
                <div className='info_container'>
                <p className='description'>{projectItem.description}</p>
                </div>
                <div className='btn_container'>
                        <a href={projectItem.url}>
                                <button className='btn'>                
                                Source                   
                                </button> 
                            </a>  
                            <a href={projectItem.demo}>
                                <button className='btn'>                
                                Demo                    
                                </button> 
                            </a>                    
                </div>
                         
            </div>
                   
        </>
    );
}

export default Project;