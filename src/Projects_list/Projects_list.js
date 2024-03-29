import React from 'react';
import './Projects_list.css';

import chat_app_logo from '../media/chat_app_logo.png';
import vibe_check_logo from '../media/Vibe_check_logo.png';
import shopping_logo from '../media/Shopping_logo.jpg';

const Projects_list = (props) => {
  window.addEventListener('scroll', (event) => {
    let height = window.innerHeight;
    let scroll = window.scrollY;
    let scrollPercentage = scroll / height;
    if (scrollPercentage >= 0.6) {
      let element1 = document.getElementById('project1details');
      let element2 = document.getElementById('project1logo');
      element1.classList.remove('hide');
      element1.classList.add('left-in');
      element2.classList.remove('hide');
      element2.classList.add('scale-in');
    }
    if (scrollPercentage >= 1.4) {
      let element1 = document.getElementById('project2details');
      let element2 = document.getElementById('project2logo');
      element1.classList.remove('hide');
      element1.classList.add('right-in');
      element2.classList.remove('hide');
      element2.classList.add('scale-in');
    }
    if (scrollPercentage >= 2.2) {
      let element1 = document.getElementById('project3details');
      let element2 = document.getElementById('project3logo');
      element1.classList.remove('hide');
      element1.classList.add('left-in');
      element2.classList.remove('hide');
      element2.classList.add('scale-in');
    }
  });

  return (
    <div className="Projects-list" id="Projects">
      <div className="Project project1 section" id="Project">
        <div className="Margin-left hide" id="project1details">
          <p className="Project-title">Chat App</p>
          <p className="Project-description w-80">
            This is an online video calling platform developed using webRTC
            technology and react. You can discover people online and make
            friends and have a video chat with them.
          </p>
          <a
            href={'https://chatbox-390df.web.app'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="Project-button Access1">Access</button>
          </a>

          <a
            href={'https://github.com/sandeepkambham08/chat-app'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="Project-button Source1">Source</button>
          </a>
        </div>
        <img
          src={chat_app_logo}
          className="Project-logo  Margin-right hide w-32 md:w-60 xl:w-80"
          style={{ borderRadius: '25vh' }}
          id="project1logo"
          alt="chat-app-logo"
        />
      </div>
      <div className="Project project2 section" id="Project">
        <img
          src={vibe_check_logo}
          className="Project-logo Margin-left hide w-32 md:w-60 xl:w-80"
          id="project2logo"
          alt="chat-app-logo"
        />
        <div className="Margin-right hide" id="project2details">
          <p className="Project-title">Vibe check</p>
          <p className="Project-description w-80">
            This is an iOS application which can used to check the vibe of a
            location by viewing recently uploaded pictures. User can take a snap
            in the app and upload it to vibe of the nearby location.
          </p>
          <a
            href={'https://github.com/sandeepkambham08/vibe_check'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="Project-button project-2-button ">Source</button>
          </a>
        </div>
      </div>
      <div className="Project project3 section" id="Project">
        <div className="Margin-left hide" id="project3details">
          <p className="Project-title">Shopping</p>
          <p className="Project-description w-80">
            This is a shopping website where user can browse through various
            categories of products add them to the cart and checkout by making a
            payment and receive a confirmation email.
          </p>
          <a
            href={'https://shopping-site-1.web.app/'}
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            <button className="Access3 Project-button">Access</button>
          </a>
          <a
            href={'https://github.com/sandeepkambham08/shopping'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="Project-button project-3-button">Source</button>
          </a>
        </div>
        <img
          src={shopping_logo}
          className="Project-logo  Margin-right hide w-32 md:w-60 xl:w-80"
          id="project3logo"
          alt="chat-app-logo"
        />
      </div>
    </div>
  );
};

export default Projects_list;
