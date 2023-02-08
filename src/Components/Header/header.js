import React from "react";
import './header.css'
import {FaLinkedinIn} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';

  
export default function Header()

{   

    return(
        <>
        <div className="header_section">
                    < div className='left_section'>
                                    <div className='social_links'><FaLinkedinIn size={22} color={'tale'}/></div>
                                    <div className='social_links'><FaFacebookSquare size={21} color={'#1877f2'} /></div>
                                    <div className='social_links'><FaInstagramSquare size={22} color={'orangered'}/></div>
                                    <div className='social_links'><FaGithub size={24} /></div>
                    </div> 

                    < div className='right_section'>
                        <div className="right_section_lists">
                        </div>
                        <div className="right_section_hamburger"    >
                           <MenuIcon />
                        </div>
                       
                    </div>  
                   

       </div>

     
        
        
        </>
    )
}