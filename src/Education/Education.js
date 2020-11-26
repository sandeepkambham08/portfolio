import React from 'react';
import './Education.css';
import education from '../media/education_icon.png';
import Education_picture from '../media/Education_picture1.jpg';

const Education = () => {
    return (
        <div className='Education-block section' id='Education'>
            <div className='Education-pic-details'>
            <div>
                <img src={Education_picture} alt="Education_picture" className="Education-picture"/>
            </div>
            <div className='Background-blur'>
            </div>
            <div className='Education-list'>
            <div className='Education-title'>
                <img src={education} className='Education-icon' alt='edu icon' />
                <h2 style={{ paddingLeft: '10px', color: "white" }}>Education</h2>
            </div>
                <div>
                    <h3 className='Degree' > Master of Engineering in Computer Engineering, 2020 </h3>
                    <p className='College'>Concordia University, Montreal, Canada</p>
                </div>
                <div className='Education-project'>
                    <p className='Degree'>Notable Project:</p>
                    <p>Content delivery network Design and implementation</p>
                        <ul>
                            <li>Developed an efficient CDN network which reduces the average delay time for a user by sending the video from a geographically close server or from a less traffic server.</li>
                            <li>Developed a website for the admin to upload videos to the main server and to automatically copy videos to replica servers located in the Asia Pacific and Europe.</li>
                            <li>Designed and Developed an interactive website for a user to watch videos from a nearby local server.</li>
                        </ul>
                </div>
                <br></br>
                <div>
                    <h3 className='Degree'> Bachelor of Technology, 2016 </h3>
                    <p className='College'>JNTU, Hyderabad, India</p>
                </div>

            </div>
            </div>
            
        </div>
    )
}

export default Education;