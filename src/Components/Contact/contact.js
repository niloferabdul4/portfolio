import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'

export default function Contact(){
  
   const [showLabel,setShowLabel]=useState(false)
    const form=useRef();

    useEffect(()=>{setTimeout(()=>{setShowLabel(false)},1000)})
   
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_amn9dlf', 'template_0rnn8qq',form.current, 'Epbr-FG9wH1M0USau')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        setShowLabel(true)
        e.target.reset()

    };

  

    return(
        <>
    <section className="contact" id='contact' >
            <h2 className='sub_heading'>Contact Me</h2>

        <div className="contact_container">                  

        <form ref={form} onSubmit={handleSubmit} className="form_container">    
             <div className="name_email">
               <label for ='name' className="label"  >Name*</label>
               <input type='text' className="input" id='name' name='name' placeholder="Enter Name"/>            
               <label for ='email' className="label">Email*</label>
               <input type='text' className="input" id='email' name='email' placeholder="Enter Email"/>               
            </div>
            
            <div className="textarea_section">
               <label for ='message'  className="label" >Message*</label>               
               <textarea type='text'  className="textarea" name='message' placeholder="Start typing your message here....."></textarea>
            </div>

            <div className="btn_section" >
                <button type='submit' className="send_btn"  >Send Message</button>
            </div>
            {showLabel && 
            <label className='sent_msg'>Message Sent</label>
}
     </form>
</div>

    </section>
        
        
        </>
    )
}