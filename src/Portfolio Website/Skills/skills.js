import React from "react";

import html from './icons8-html-5.svg'
import css from './icons8-css3.svg'
import javascript from './icons8-javascript.svg'
import react from './icons8-react.svg'
import mysql from './icons8-mysql-logo.svg'
import python from './icons8-python.svg'
import figma from './icons8-figma.svg'

import './skills.css'
const Skills=()=>{
    return(
        <>
        <div className="skills_container" id='skills'>
            <h2 className='skills_heading'>SKILLS</h2>

            <div className="skills_box">
                <ul className="skillsgrid">

                    <li className='logo_wrapper'>
                        <img src={html} alt="" height={60} width={60}/>
                        <p className="logo_name">HTML</p>
                    </li> 
                    <li className='logo_wrapper'>
                    <img src={css} alt="" height={60} width={60}/>
                    <p className="logo_name">CSS</p>
                    </li>
                    <li className='logo_wrapper'>
                    <img src={javascript} alt="" height={60} width={60} />
                    <p className="logo_name">Javascript</p>
                    </li>
                    <li className='logo_wrapper'>
                    <img src={react} alt="" height={50} width={50}/>
                    <p className="logo_name">React</p>
                    </li>
                    <li className='logo_wrapper'>
                    <img src={mysql} alt="" height={60} width={60}/>
                    <p className="logo_name">MySQL</p>
                    </li>
                    <li className='logo_wrapper'>
                    <img src={python} alt="" height={60} width={60} />
                    <p className="logo_name">Python</p>
                    </li>
                    <li className='logo_wrapper'>
                    <img src={figma} alt="" height={60} width={60} />
                    <p className="logo_name">Figma</p>
                    </li>
                </ul>
            </div>

       </div>
        </>
    )

}


export default Skills;