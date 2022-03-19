import React from 'react';
import './Skills.css';
import Projects_list from '../Projects_list/Projects_list';

import background from '../media/background.jpg';

const Skills = () => {
  return (
    <div className="Skills section" id="Skills">
      <h1 className="Skills-title font-bold text-3xl my-2 mx-auto">Skills</h1>
      <div className="divide grid gap-2">
        <div className="grid gap-2">
          <div>
            <h2 className="font-bold text-xl">Core</h2>
            <p>JavaScript</p>
            <p>HTML5</p>
            <p>CSS</p>
            <p>TypeScript</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Frameworks</h2>
            <p>React</p>
            <p>React-Native (basic)</p>
            <p>GatsbyJS</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Libraries</h2>
            <p>Redux</p>
            <p>Jquery</p>
            <p>Bootstrap</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Elixir stack</h2>
            <p>Elixir</p>
            <p>Phoenix</p>
            <p>Liveview</p>
            <p>Ecto</p>
          </div>
        </div>
        <div className="grid gap-2">
          <div>
            <h2 className="font-bold text-xl">Related</h2>
            <p>GraphQL</p>
            <p>AJAX</p>
            <p>React-router</p>
            <p>REST API's</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Database</h2>
            <p>MySQL</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">AWS</h2>
            <p>EC2</p>
            <p>S3</p>
            <p>lambda</p>
            <p>Route53</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Tools</h2>
            <p>WinSCP</p>
            <p>putty</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Others</h2>
            <p>webRTC, GitHub, npm, material UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
