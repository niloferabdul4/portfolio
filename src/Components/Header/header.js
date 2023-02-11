import React,{useContext} from "react";
import './header.css'
import {FaLinkedinIn} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import AppContext from "../Context/Context";
  
export default function Header()

{   

    const {menuOpen,setMenuOpen}=useContext(AppContext)
    return(
        <>
        <div className="header_section">
                    < div className='left_section'>
                                    <div className='social_links'><FaLinkedinIn size={24} /></div>
                                    <div className='social_links'><FaFacebookSquare size={24}  /></div>
                                    <div className='social_links'>
                                        <a><FaInstagramSquare size={24} /></a>
                                    </div>

                                    <div className='social_links'>
                                      <a href='https://github.com/niloferabdul4'>
                                          <FaGithub size={24} />
                                      </a>
                                          
                                    </div>
                    </div> 

                    < div className='right_section'>                        
                            <div className="right_section_lists">
                                <ul>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#resume">Resume</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                               
                            </div>
                           
                        <div className={"right_section_hamburger " + (menuOpen && "active")}     >
                        
                          {menuOpen? (<GrClose size={24} backgroundColor={'white'} onClick={()=>setMenuOpen(false)}/>): (<GiHamburgerMenu  size={24} onClick={()=>setMenuOpen(true)}/>)}
                            
                        
                         
                        </div>
                       
                    </div>  
                   

       </div>

     
        
        
        </>
    )
}