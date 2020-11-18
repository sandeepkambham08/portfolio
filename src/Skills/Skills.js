import React from 'react';
import './Skills.css';
import Projects_list from '../Projects_list/Projects_list';


const Skills = () => {
    return (
        <div>
            {/* <h1>Skills</h1> */}
            <div className='Skills'>
            {/* <h1>Skills</h1> */}
            <div>
                {/* <h2>Skills</h2> */}
                <h2>Core</h2>
                <div>
                    <p>JavaScript</p>
                    <p>HTML5</p>
                    <p>CSS</p>
                </div>
                <h2>Frameworks</h2>
                <div>
                    <p>React</p>
                    <p>React-Native (basic)</p>
                </div>
                <h2>Libraries</h2>
                <div>
                    <p>Redux</p>
                    <p className='Learning-skill'>Jquery</p>
                    <p className='Learning-skill'>Bootstrap</p>
                </div>
                <h2>Related</h2>
                <div>
                    <p>AJAX</p>
                    <p>React-router</p>
                    <p>REST API's</p>
                </div>
            </div>
            <div>
                {/* <h2>Other tools and technologies</h2> */}
                <div>
                    <h2>Database</h2>
                    <div>
                        <p>MySQL</p>
                    </div>
                    <h2>AWS</h2>
                    <div>
                        <p>EC2</p>
                        <p>S3</p>
                        <p>lambda</p>
                        <p>Route53</p>
                    </div>
                    <h2>Tools</h2>
                    <div>
                        <p>WinSCP</p>
                        <p>putty</p>
                    </div>
                    <h2>Languages</h2>
                    <div>
                        <p>C</p>
                        <p>Java (basic)</p>
                    </div>
                    <h2>Others</h2>
                    <p>webRTC, GitHub, npm, material UI</p>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default Skills;