


import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

import {FaHome,
        FaUserAlt,
        FaPhoneAlt,
        FaUserGraduate,
        FaProjectDiagram,
        FaBook,
        FaLayerGroup,
        FaAlignJustify
       } from "react-icons/fa";




export default function Sidebar() {

    const [isOpen,setIsOpen]=React.useState(false)

    const menuItem=[  {
                        path:'/',
                        name:"Home",
                        icon:<FaHome />
                       },

                       {
                        path:'/about',
                        name:"About Me",
                        icon:<FaUserAlt/>
                       },
                       {
                        path:'/skills',
                        name:"Skills",
                        icon:<FaLayerGroup />
                       },
                       {
                        path:'/project',
                        name:"Project",
                        icon:<FaProjectDiagram />
                       },
                       {
                        path:'/resume',
                        name:"Resume",
                        icon:<FaBook />
                       },
                       {
                        path:'/education',
                        name:"Education",
                        icon:<FaUserGraduate />
                       },
                       {
                        path:'/contact',
                        name:"Contact",
                        icon:<FaPhoneAlt />
                       }            
                    
                    ]

    
    function handleClick()
    {
      setIsOpen(!isOpen)
     
    }   

    return (
        <div className='container'>

            <div style={{width:isOpen? '190px': '50px'}} className=  'sidebar'>

                <div className='top_section' >                  
                    
                        <div style={{marginLeft:isOpen? '1px': '0px'}}  className="bars">                                
                                <FaAlignJustify onClick={handleClick} />                              
                        </div>

                        <div className="menu">                                
                                <h4 style= {{display:isOpen? 'block' : 'none',marginRight:isOpen? '20px': '0px'}}>MENU</h4>                                 
                        </div>
              </div>


            {  
           
             menuItem.map((n,index)=>(
                                     <NavLink to={n.path}  key={index} className='menu_items' activeclassName='active' >

                                       <div className='icon' style={{marginRight:isOpen? '10px': '0px'}}>{n.icon}</div>
                                       <div style= {{display:isOpen? 'block' :'none',marginLeft:isOpen? '30px': '0px'}} className='link_name' >{n.name}</div>

                                     </NavLink>
                                    
                                   )
                         )            

             }
           
         </div>
                         
      </div>

    
    )
}
