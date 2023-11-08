import React from 'react';
import './menu.css'
import {FaHome,
        FaUserAlt,
        FaPhoneAlt,
        FaProjectDiagram,
        FaLayerGroup,
      
       } from "react-icons/fa";
import { useContext } from 'react';
import AppContext from '../Context/Context';

export default function Menubar() {

    const {menuOpen,setMenuOpen}=useContext(AppContext)
    

   const menuItems=[{id:1,title:'Intro',icon:<FaHome/>},
                    {id:2,title:'About Me',icon:<FaUserAlt/>},
                    {id:3,title:'Projects',icon:<FaProjectDiagram/>},
                    {id:4,title:'Skills',icon:<FaLayerGroup/>},
                    {id:5,title:'Contact',icon:<FaPhoneAlt/>},
                   ]

    const handleMenu=(item)=>{
      setMenuOpen(false)
      
    }
    return (
      <>
     
        <div className={"menu "+(menuOpen && "active")}>
        {menuItems.map(item=>{return <>
          <ul>  
                  <li>
                  <a href ={`#${item.title}`}className='menu_lists' key={item.title} onClick={()=>handleMenu(item)}>
                    <div className='span_icon'>
                      {item.icon}                        
                    </div>
                   <div className='span_name'>
                       {item.title}
                   </div>  
                   </a>
                   </li>            
      
           </ul>  
           </>})}   
         </div>
         
        </>            
    )
}
