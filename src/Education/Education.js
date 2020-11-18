import React from 'react';
import './Education.css';
import education from '../media/education_icon.png'


const Education = () => {
    return (
        <div className='Education-block'>
            <div className='Education-title'>
            <img src={education} className='Education-icon' alt='edu icon' />
            <h2 style={{paddingLeft:'10px'}}>Education</h2>
            </div>
            <div className='Education-list'>
                <div>
                    <p className='Degree' > Master of Engineering in Computer Engineering, 2020 </p>
                    <p className='College'>Concordia University, Montreal, Canada</p>
                </div>
                <br></br>
                <div>
                    <p className='Degree'> Bachelor of Technology, 2016 </p>
                    <p className='College'>JNTU, Hyderabad, India</p>
                </div>

            </div>
        </div>
    )
}

export default Education;