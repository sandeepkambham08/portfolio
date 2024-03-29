import React, { Component } from 'react';
import logo from './media/IMG_9275.JPG';
import linkedin_logo from './media/Linkedin_logo.png';
import Github_logo from './media/Github_logo.png';
import js_logo from './media/javascript.png';
import React_logo from './media/React_logo.png';

import './App.css';

// Import componenets //
import Navigator from './Navigator/Navigator.js';
import ProjectsList from './Projects_list/Projects_list.js';
import ContactForm from './Contact_form/Contact_form.js';
import Skills from './Skills/Skills.js';
import Education from './Education/Education.js';
import Experience from './Experience/Experience.js';

import resume from './media/Sandeep_Kambham_Resume.pdf';

import SandeepAnimation from './Sandeep_animation/Sandeep_animation.js';

let scrollPercentage;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <div className="App-body">
          <div
            className="Initial-page xl:pl-60 section grid grid-flow-row sm:grid-rows-2 sm:grid-cols-3 xl:grid-rows-1 xl:grid-cols-3 xl:grid-flow-col justify-center justify-items-center"
            id="About"
          >
            <div className="Sandeep-logo-div p-1  justify-center sm:col-span-3 xl:col-span-1">
              <img
                src={logo}
                alt="Sandeep_logo"
                className="Sandeep-logo w-80 rounded-2xl sm:rounded-full sm:w-96 sm:h-96 justify-center"
              />
            </div>
            <div className="My-description grid font-bold text-xl md:text-3xl max-w-lg justify-center sm:col-span-2 xl:col-span-1 gap-4">
              <p className="linear-wipe" style={{ marginBottom: '0px' }}>
                {' '}
                Hello! I'm
              </p>
              <SandeepAnimation
                stroke_size="6"
                stroke_color1="white"
                stroke_color2="black"
              />
              <p className="linear-wipe" style={{ marginTop: '0px' }}>
                I am a FRONT-END DEVELOPER who love to develop wide range of
                applications with simple and clean UI.
              </p>
            </div>
            <div className="links-tab">
              <a
                href={'https://www.linkedin.com/in/sandeepkambham08'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={linkedin_logo}
                  alt="linkedin_logo"
                  className="Linkedin-logo logos w-40 md:w-52"
                />
              </a>
              <a
                href={'https://github.com/sandeepkambham08/'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={Github_logo}
                  alt="Github_logo"
                  className="Github-logo logos w-40 md:w-52"
                />
              </a>
              <a href={resume} rel="noopener noreferrer" target="_blank">
                <p className="Resume-logo py-1 logos w-40 md:w-52 md:py-2 md:text-2xl">
                  Resume
                </p>
              </a>
            </div>
          </div>
          <ProjectsList scrollPercentage={scrollPercentage} />
          <Education />
          <Skills />
          <Experience />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default App;
