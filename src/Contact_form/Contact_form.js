import React from 'react';
import './Contact_form.css';
import emailjs from 'emailjs-com';

import linkedin_small  from '../media/linkedin_small.jpg'
import mail from '../media/mail_icon.png';

// let error='';

const onSend = () =>{
    document.getElementById('error').innerHTML=""
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    // console.log(name, email, message);
    if(!name || !email || !message ){
        // console.log('Enter all values')
        document.getElementById('error').innerHTML="* Please fill all the fields"
    }
    else{
        let templateParams = {
            from_name: name,
            from_mail: email,
            message: message
          }
          emailjs.send("service_35uvf3l","template_zka1vk8", templateParams, "user_zYvcx8ahyv9WeuNCKteNZ")
            .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('error').innerHTML="Message sent";
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            }, function (error) {
            console.log('FAILED...', error);
            document.getElementById('error').innerHTML="Failed to send message, please retry";
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            }
            
            );
            
    }
    
}

const Contact_form = () => {
    return (
        <div className='Contact_form section' id='Contact'>
            <br></br>
            <h1>Get in touch</h1>
            {/* <p>You can reach out to me on </p> */}
            <div className='Contact-option' >
            <img src={linkedin_small} alt='linkedin icon' className='Linkedin-small-icon' />
            <a href={'https://www.linkedin.com/in/sandeepkambham08'} rel="noopener noreferrer" target='_blank'>www.linkedin.com/in/sandeepkambham08</a>
            </div>
          <br></br>
          <br></br>
          <div className='Contact-option'>
          <img src={mail} alt='mail icon' className='Mail-icon' />
          <a href={'mailto:sandeepkambham08@gmail.com'}>sandeepkambham08@gmail.com</a>
          </div>
          <br></br>
          <br></br>
          <form className='Form'>
              <p>Or use this form to send a message, I will reach out ASAP! </p>
              <br></br>
              <input type='text' placeholder='Name' id='name' required/>
              <input type='text' placeholder='Email' id='email'  required/>
              <br></br>
              <br></br>
              <textarea rows="4" cols="30" placeholder='Message' id='message' required/>
              <br></br>
              <br></br>  
          </form>
          <p id='error' className='error'></p>
          <button className='Submit-button' onClick={()=>{onSend()}}>SEND</button>
        </div>
    )
}

export default Contact_form;