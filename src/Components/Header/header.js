import React,{useContext} from "react";
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import AppContext from "../Context/Context";
import Social from "./Social";
import { Link } from "react-router-dom";
  
export default function Header()
{   

    const {menuOpen,setMenuOpen}=useContext(AppContext)
    return(
        <>
        <div className="header_section">   
           <div className="header_wrapper">
           <div className="left_section">
                        {Social &&
                        Social.map((social) => (
                            <div className='headersocial_links' >
                            <a href={social.iconLink} key={social.id}>
                            {social.iconName}
                            </a>
                            </div>
                        ))}
                    </div>               
                    < div className='right_section'>                        
                            <div className="right_section_lists">
                                <ul>
                                 <Link  style={{ color:'#e6e1f9'}} to='/projectslist'>Projects</Link>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                               
                            </div>                           
                        <div className={"right_section_hamburger " + (menuOpen && "active")}>                        
                          {menuOpen? (<GrClose size={24} color={'white'} style={{cursor:'pointer'}} onClick={()=>setMenuOpen(false)}/>)
                                    :
                                     (<GiHamburgerMenu  size={24} style={{cursor:'pointer'}} onClick={()=>{setMenuOpen(true)}}/>)}
                        </div>
                       
                    </div>                     

           </div>
                  
       </div>

     
        
        
        </>
    )
}