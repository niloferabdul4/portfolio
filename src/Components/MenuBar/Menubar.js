import React from 'react';
import './menu.css'

import {FaHome,
        FaUserAlt,
        FaPhoneAlt,
        FaUserGraduate,
        FaProjectDiagram,
        FaBook,
        FaLayerGroup,
      
       } from "react-icons/fa";
import { useContext } from 'react';
import AppContext from '../Context/Context';

export default function Menubar() {

    const {menuOpen,setMenuOpen}=useContext(AppContext)


    return (
        <div className={"menu "+(menuOpen && "active")}>
          
          <ul>
      
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">
          <div className='span_icon'>
              <FaHome />                        
          </div>
          <div className='span_name'>
               Intro
          </div>   
          </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">
          <div className='span_icon'>
              <FaUserAlt/>                        
          </div>
          <div className='span_name'>
               About Me
          </div>   
          </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skills">
          <div className='span_icon'>
              <FaLayerGroup />                        
          </div>
          <div className='span_name'>
               Skills
          </div>   
          </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#projects">
          <div className='span_icon'>
              <FaProjectDiagram />                        
          </div>
          <div className='span_name'>
               Projects
          </div>   
          </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#education">
          <div className='span_icon'>
              <FaUserGraduate />                        
          </div>
          <div className='span_name'>
               Education
          </div>   
          </a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">
          <div className='span_icon'>
              <FaPhoneAlt />                        
          </div>
          <div className='span_name'>
               Contact
          </div>   
          </a>
        </li>        
      
      </ul>    
         </div>
                    
    )
}
