import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as phone, faEnvelope as envelope } from '@fortawesome/free-solid-svg-icons';
//import { faGithub as github, faLinkedin as linkedin } from '@fortawesome/free-solid-svg-icons';

export default function Mail (){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3521sio', 'template_dnua5p9', form.current, 'FGSFEuSvUN4zZKAIf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
// {    <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>

//}

    <div id="contacts" class="ap">
        <h2>Contacts:</h2>
        <div class="cs">
            
            <div class="speech-bubble" id='l' style={{color:'#af2d58'}}>
                <a href="https://www.linkedin.com/in/diana-baghirova-b8b49123b/" class="c"><FontAwesomeIcon icon={ envelope } /><p> linkedin</p></a>
            </div>
            
            <div class="speech-bubble" style={{color:"#a9528d"}}>
                <a href="#contacts" class="c"><FontAwesomeIcon icon={ envelope } /><p>diana.baghirova18@gmail.com</p> </a>
                <a href="#contacts"  class="c"><FontAwesomeIcon icon={ phone } /><p>+994-55-460-27-38</p></a>
            </div>
            
            <div class="speech-bubble" id='r' style={{color:"#744b9f"}}>
                <a href="https://github.com/d-baghirova" class="c"><FontAwesomeIcon icon={ phone } /><p> github</p></a>
            </div>
        </div>
            <form ref={form} onSubmit={sendEmail}>
                  <label for="message">Message:</label>
                  <textarea  class="form-control" name="message" id="message" placeholder="Your message" rows="10" cols="70"></textarea>
                  <input type="hidden" name="_autoresponse" value="Your letter was sent to Diana Baghirova" />
                  <label for="email">Email:</label>
                  <input id="email"  class="form-control"  type="email" name="email" placeholder="Your Email" />
                  <button class="btn btn-primary" type="submit">Send</button> 
                  <p>You can send me message directly from this form, after submiting the form you'll receive autoresponse If did't receive it, you probably entered wrong email address.</p>
            </form>
    </div>
  );
};