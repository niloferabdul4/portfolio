import React from 'react'
import  '../../Components/Projects/proj.css'
import projects_data from '../../Components/Projects/projects_data'
import ProjectCard from '../../Components/Projects/ProjectCard'
import './projectslist.css'
import { Breadcrumbs,Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
const ProjectsList = () => {
    const navigate=useNavigate()
  return (

       
       <div className='sections' >
        <button className='go_back' onClick={()=>navigate('/')}>{`<<<Go Home`}</button>
         <div className='projects'> 
         <h2 className='subHeading'>Projects</h2>
         <div className="projectslist_container">
            {
                projects_data.map((proj)=>{return  <ProjectCard key={proj.id} projectItem={proj}
                                                    />
                }
                    
                )
                }
               
       </div>
       </div>
    </div>
  )
}

export default ProjectsList
