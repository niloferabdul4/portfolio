import React from 'react';
import './proj.css'


const Project = ({projectItem}) => {
  
    return (
        <>          

      <div className="proj_card">
          
                <div className="image_container">
                        <h3 className='proj_title'>{projectItem.title}</h3>
                        <img src={projectItem.image} alt='' className='proj_image'/>

                </div>
                <div className='info_container'>
                <p className='description'>{projectItem.description}</p>
                <span style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
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
                   
                </span>
                         
            </div>
         
        </div>




                   
        </>
    );
}

export default Project;
