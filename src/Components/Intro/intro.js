import React,{useEffect,useRef} from 'react';
import './intro.css'
import { init } from 'ityped';
import image from '../../assets/web-development.png';
import Social from './Social';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '../Slider/Slider';


export default function Intro(){
  
    const textRef=useRef(null)
    useEffect(()=>{init(textRef.current, { showCursor: false,
        backDelay:1500,
        backSpeed:80,
        strings: ["Front End Developer", "React JS Developer"],
        })},[])
    return (

       
        <div className='intro_container' id='intro'>                           
               <div className='intro_wrapper'>                  
                  <div className='intro_left'>
                     <img className='vector_image' src={image} alt=''/>
                     < div className='intro_left_social'>
                     {Social &&
          Social.map((social) => ( <div className='social_links' >
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
            </div>
          ))}
{/*
                                    <div className='social_links'><FaLinkedinIn size={26} /></div>
                                    <div className='social_links'><FaFacebookSquare size={26}  /></div>
                                    <div className='social_links'>
                                        <a><FaInstagramSquare size={26} /></a>
                                    </div>

                                    <div className='social_links'>
                                      <a href='https://github.com/niloferabdul4'>
                                          <FaGithub size={26} />
                                      </a>
                                          
                                    </div>
          */}
                    </div> 
      
        
                   </div>   
                   <div className='intro_right'>
                        <h2>HI THERE! I'M</h2>
                        <h1> NILOFER ABDUL</h1>                                           
                        <p className='title_items'> 
                            <span ref={textRef}></span>
                         </p>  
                         <span className='btn_container'>
                           <a href='#resume'>
                                <button className='resume_btn' >Resume</button>  
                            </a>
                            <a href='#projects'>
                                <button className='resume_btn' >Projects</button>  
                            </a>      
                        </span> 
                        {/*
                        <div className='slider'>                     
                            <Slider />
                        </div>   
    */}                           
                                                                 
                   </div>
                                                
               </div>   
                
                
                
               
            </div>
                        
        
    );
}


