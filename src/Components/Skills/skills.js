import React from "react";
import skills_data from "./skills_data";
import './skills.css'


const Skills=()=>{
  
    return(
        <>
        <div className="skills_container" id='Skills'>
            <h2 className='skills_heading'>Skills</h2>

            <div className="skills_box">
                <ul>
            { skills_data.map(item=>{return <li key={item.id}>
                        <img src={item.image} className='logo' alt="" height={60} width={60}/>
                        <p className="logo_name">{item.name}</p>

                        </li>})
            }

                   
                </ul>
            </div>

       </div>
        </>
    )

}


export default Skills;