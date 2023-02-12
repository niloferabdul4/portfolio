import React from "react";
import {useRef} from 'react'
import { auth } from "../../firebase/firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

import './contact.css'

export default function Contact(){

    const inputRef=useRef();
    const email=document.getElementById('email').value

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://www.example.com/finishSignUp?cartId=1234',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
      };
    const handleSubmit = (e) => {
        e.preventDefault();
   
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    // ...
  });
     

      };
    


    return(
        <>
    <section className="contact" id='contact' >
            <h2>Contact Me</h2>

        <div className="contact_container">
{/*
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

    */}       

        <form ref={inputRef} onSubmit={handleSubmit} className="form_container">    
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