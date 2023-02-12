import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'

export default function Contact(){

    const form=useRef();
   
    const handleSubmit = (e) => {
        console.log('hello')
        e.preventDefault();
        emailjs.sendForm('service_48okpfq', 'template_u3ei10v',form.current, 'PNwP9KS9m_OR-Ydgq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    };


    return(
        <>
    <section className="contact" id='contact' >
            <h2>Contact Me</h2>

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
               
               <textarea type='text'  className="textarea" name='comments' placeholder="Start typing your message here....."></textarea>
            </div>

            <div className="btn_section">
                <button type='submit' className="send_btn"  >Send Message</button>
            </div>
     </form>
</div>

    </section>
        
        
        </>
    )
}