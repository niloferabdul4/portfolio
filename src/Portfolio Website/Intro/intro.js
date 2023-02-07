import React from 'react';




import './intro.css'

import photo from './photo.png'




export default function Intro(){
    return (

       
        <div className='intro_container' id='intro'>
        
           

            <div className='intro_left'>                             
               <div className='introleft_wrapper'>
                    <div className='hi'>HI THERE! I'M</div>
                    <h1 className='name'> NILOFER ABDUL</h1>
                                           
                       <p className='title_items'> A <span>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
                                 
                   <button className='resume_btn' >Resume</button>
                </div>
               
            </div>
            <div className='intro_right'>

              <img className='photo' src={photo} alt="" height={360} width={300} />

                    
              </div> 
             
             
        </div>
    );
}


