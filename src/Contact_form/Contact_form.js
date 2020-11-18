import React from 'react';
import './Contact_form.css';
import linkedin_logo from '../media/Linkedin_logo.png';
import Github_logo from '../media/Github_logo.png';


const Contact_form = () => {
    return (
        <div className='Contact_form'>
            <br></br>
            <h2>Get in touch</h2>
            <p>You can reach out to me on </p>
          <p>Linkedin: www.linkedin.com/in/sandeepkambham08</p>
          <p>Email : sandeepkambham08@gmail.com</p>
          <form>
              <p>Fill this form </p>
              <input type='text' placeholder='Name'/>
              <input type='text' placeholder='Email'/>
              
          </form>
        </div>
    )
}

export default Contact_form;