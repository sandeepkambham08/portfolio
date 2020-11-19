import React from 'react';
import './Contact_form.css';

import linkedin_small  from '../media/linkedin_small.jpg'
import mail from '../media/mail_icon.png';


const Contact_form = () => {
    return (
        <div className='Contact_form section' id='Contact'>
            <br></br>
            <br></br>
            <h2>Get in touch</h2>
            {/* <p>You can reach out to me on </p> */}
            <div className='Contact-option' >
            <img src={linkedin_small} alt='linkedin icon' className='Linkedin-small-icon' />
            <a href={'https://www.linkedin.com/in/sandeepkambham08'} target='_blank'>www.linkedin.com/in/sandeepkambham08</a>
            </div>
          <br></br>
          <br></br>
          <div className='Contact-option'>
          <img src={mail} alt='mail icon' className='Mail-icon' />
          <a href={'mailto:sandeepkambham08@gmail.com'}>sandeepkambham08@gmail.com</a>
          </div>
          <br></br>
          <br></br>
          <form>
              <p>Or use this form to send a message, I will reach out ASAP! </p>
              <input type='text' placeholder='Name' required/>
              <input type='text' placeholder='Email'required/>
              <br></br>
              <br></br>
              <textarea rows="4" cols="30" placeholder='Message' required/>
              <br></br>
              <br></br>
              <button className='Submit-button'>SUBMIT</button>
          </form>
        </div>
    )
}

export default Contact_form;