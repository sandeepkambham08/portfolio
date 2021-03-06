// import React, { Component } from 'react';
import React, { Component } from "react";
// import logo from './media/Sandeep_logo.png';
import logo from "./media/IMG_9275.JPG";
import linkedin_logo from "./media/Linkedin_logo.png";
import Github_logo from "./media/Github_logo.png";
import js_logo from "./media/javascript.png";
import React_logo from "./media/React_logo.png";

import "./App.css";

// Import componenets //
import Navigator from "./Navigator/Navigator.js";
import ProjectsList from "./Projects_list/Projects_list.js";
import ContactForm from "./Contact_form/Contact_form.js";
import Skills from "./Skills/Skills.js";
import Education from "./Education/Education.js";
import Experience from "./Experience/Experience.js";

import resume from "./media/Sandeep_Kambham_Resume.pdf";

import SandeepAnimation from "./Sandeep_animation/Sandeep_animation.js";

// let scrollDirection = 0; // To detect scroll direction
let scrollPercentage; // Amount the view is scrolled

// const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url,'POST')
// .then( data=>{
//   console.log(data);
//   return data.json()})
// .then(res=>{
//   console.log("Hello")
//   console.log(res)
// });

class App extends Component {
  render() {
    //   window.addEventListener("scroll", (event) => {
    //     let height = window.innerHeight;
    //     let scroll = window.scrollY;
    //     scrollPercentage = scroll/height;
    //     if(scrollPercentage>1){                           // Don't show header in first screen
    //       scrollDirection= scrollPercentage/scrollDirection;
    //       if(scrollDirection<1){
    //       // console.log(scrollDirection, ' , ', scrollPercentage)
    //       document.querySelector('header').classList.add('App-header');
    //       document.querySelector('header').classList.remove('hide');
    //       }
    //       if(scrollDirection>1){
    //         // console.log(scrollDirection, ' , ', scrollPercentage)
    //         document.querySelector('header').classList.remove('App-header');
    //         document.querySelector('header').classList.add('hide');
    //         }
    //     }
    //                          // Don't show header in first screen
    //     if(scrollPercentage<=1){
    //       document.querySelector('header').classList.remove('App-header');
    //       document.querySelector('header').classList.add('hide');
    //     }

    //     scrollDirection=scrollPercentage; // saving scrollpercentage for next calculation
    // });
    const sandeep_logo = document.querySelectorAll("#Sandeep-name path");
    console.log(sandeep_logo);
    for (let i = 0; i < sandeep_logo.length; i++) {
      console.log(`Letter ${i}  is ${sandeep_logo[i].getTotalLength()}`);
    }
    return (
      <div className="App">
        {/* <header className='hide'>
       <p>Sandeep portfolio</p>
      </header> */}
        {/* <div >
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>
      </div> */}
        <Navigator />
        <div className="App-body">
          <div className="Initial-page section" id="About">
            {/* {window.addEventListener('scroll', this.checkHeader)} */}
            {/* <div></div> */}
            <div className="Sandeep-logo-div">
              <img src={js_logo} alt="js_logo" className="js-logo" />
              <img src={logo} alt="Sandeep_logo" className="Sandeep-logo" />
              <img src={React_logo} alt="React_logo" className="react-logo" />
            </div>
            <div className="My-description">
              <p className="linear-wipe" style={{marginBottom:'0px'}}>
                Hello! I'm</p>
                {/* <span className="sandeep">Sandeep.</span> */}
                <SandeepAnimation 
                width="200px" 
                height="70px" 
                stroke_size='6'
                stroke_color1="white"
                stroke_color2="black"
                />
              
              <p className="linear-wipe" style={{marginTop:'0px'}}>
                I am a FRONT-END DEVELOPER who love to develop wide range of
                applications with simple and clean UI.
              </p>
            </div>
            <div className="links-tab">
              <a
                href={"https://www.linkedin.com/in/sandeepkambham08"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={linkedin_logo}
                  alt="linkedin_logo"
                  className="Linkedin-logo logos"
                />
              </a>
              <a
                href={"https://github.com/sandeepkambham08/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={Github_logo}
                  alt="Github_logo"
                  className="Github-logo logos"
                />
              </a>
              <a href={resume} rel="noopener noreferrer" target="_blank">
                <p className="Resume-logo logos">Resume</p>
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

// const targets = document.querySelectorAll("div.section")
// console.log(targets);

// // window.addEventListener('DOMContentLoaded', () => {
//   const lazyload = target => {

//     const io = new IntersectionObserver((entries,observer)=>{
//       entries.forEach(entry=>{
//         console.log('Loving ');
//         if(entry.isIntersecting){
//           console.log(entry);
//         }
//         observer.disconnect();
//       })
//     });

//     io.observe(target)

//   }
//   targets.forEach(lazyload);
