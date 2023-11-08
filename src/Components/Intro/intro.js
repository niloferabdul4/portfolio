import React,{useEffect,useRef} from 'react';
import './intro.css'
import { init } from 'ityped';
import image from '../../assets/web-development.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


export default function Intro(){
  
    const textRef=useRef(null)
    useEffect(()=>{init(textRef.current, { showCursor: false,
        backDelay:1500,
        backSpeed:80,
        strings: ["Front End Developer", "React JS Developer"],
        })},[])
    return (

       
        <div className='intro_container' id='Home'>                           
               <div className='intro_wrapper'>                  
                  <div className='intro_left'>
                     <img className='vector_image' src={image} alt=''/>                 
                   </div>   
                   <div className='intro_right'>
                        <p>HI THERE! I'M</p>
                        <h1> NILOFER ABDUL</h1>                                           
                        <p className='title_items'> 
                            <span ref={textRef}></span>
                         </p>  
                         <div className='intro_btn_container'>
                           <a href='#contact'>
                                <button className='intro_btn' >Contact</button>  
                            </a>
                            <Link  to='/projectslist'>
                                <button className='intro_btn' >Projects</button>  
                            </Link>      
                        </div>                                                     
                   </div>                                
               </div>       
            </div>
                        
        
    );
}


