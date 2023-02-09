import React from "react";

import {MdEmail} from 'react-icons/md'

import {FaFacebookMessenger} from 'react-icons/fa'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

export default function Contact(){

    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_su4rtpa', 'template_hhlgiwr', form.current, 'KKL5oSjT99l4p5WxD')
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

            <article className="contact_options">

                <div className="option">
                    <MdEmail />
                    <h4>Email</h4>
                    <h5>niloferabdul4@gmail.com</h5>
                    <a href='mailto:niloferabdul@gmail.com'>Send A Message</a>
                </div>

                <div className="option">
                    <FaFacebookMessenger />
                    <h4>Messenger</h4>
                    <h5>niloferabdul4@gmail.com</h5>
                    <a href='mailto:niloferabdul@gmail.com'>Send A Message</a>
                </div>


                <div className="option">
                    <BsFillTelephoneFill />
                    <h4>Phone</h4>
                    <a href='9715023026583'>971502302583</a>
                </div>



            </article>


        


        <form ref={form} onSubmit={sendEmail} className="form_container">    
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
                <button type='submit' className="send_btn" >Send Message</button>
            </div>
     </form>
</div>

    </section>
        
        
        </>
    )
}