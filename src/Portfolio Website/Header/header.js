import React from "react";

import './header.css'

import {FaLinkedinIn} from "react-icons/fa";

import {FaFacebookSquare} from "react-icons/fa";

import {FaInstagramSquare} from "react-icons/fa";

import {FaGithub} from "react-icons/fa";


export default function Header()

{

    

    return(
        <>
        <div className="header_section">
        

                    < div className='social'>
                        <div className='social_links'><FaLinkedinIn size={22} color={'blue'}/></div>
                        <div className='social_links'><FaFacebookSquare size={21} color={'blue'} /></div>
                        <div className='social_links'><FaInstagramSquare size={22} color={'orangered'}/></div>
                        <div className='social_links'><FaGithub size={24} /></div>
                    </div>  

       </div>

     
        
        
        </>
    )
}