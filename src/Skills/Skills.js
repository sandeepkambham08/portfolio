import React from 'react';
import './Skills.css';
import Projects_list from '../Projects_list/Projects_list';

import skills_icon from '../media/skills_icon.png';
import background from '../media/background.jpg'

const Skills = () => {
    return (
        <div className='Skills section' id='Skills'>
            <h1 className='Skills-title' >Skills</h1>   
            {/* <img className="Background" src={background}/> */}
            {/* <img className='Skills-icon' src={skills_icon}   /> */}
            <div className='divide'>
                {/* <h1>Skills</h1> */}
                <div>
                    {/* <h2>Skills</h2> */}
                    <div>
                        <h2>Core</h2>
                        <p>JavaScript</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                    </div>
                    <div>
                    <h2>Frameworks</h2>
                    
                        <p>React</p>
                        <p>React-Native (basic)</p>
                    </div>
                    <div>
                    <h2>Libraries</h2>
                    
                        <p>Redux</p>
                        <p className='Learning-skill'>Jquery</p>
                        <p className='Learning-skill'>Bootstrap</p>
                    </div>
                    <div>
                    <h2>Related</h2>
                    
                        <p>AJAX</p>
                        <p>React-router</p>
                        <p>REST API's</p>
                    </div>
                </div>
                <div>
                    {/* <h2>Other tools and technologies</h2> */}
                    <div>
                    <div>
                        <h2>Database</h2>
                        
                            <p>MySQL</p>
                        </div>
                        <div>
                        <h2>AWS</h2>
                        
                            <p>EC2</p>
                            <p>S3</p>
                            <p>lambda</p>
                            <p>Route53</p>
                        </div>
                        <div>
                        <h2>Tools</h2>
                        
                            <p>WinSCP</p>
                            <p>putty</p>
                        </div>
                        <div>
                        <h2>Languages</h2>
                        
                            <p>C</p>
                            <p>Java (basic)</p>
                        </div>
                        <div>
                        <h2>Others</h2>
                        <p>webRTC, GitHub, npm, material UI</p>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className='Skills-animation'>
            <div className='circle xxlarge shade1'></div>
            <div className='circle xlarge shade2'></div>
            <div className='circle large shade3'></div>
            <div className='circle medium shade4'></div>
            <div className='circle small shade5'></div>
            </div>
        </div>

    )
}

export default Skills;