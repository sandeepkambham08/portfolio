import './Experience.css';
import Drakkar_logo from '../media/drakkar-logo.png';
import Amazon_logo from '../media/Amazon-logo.png';
import Techm_logo from '../media/Techm-logo.png';
import Wepeoples_logo from '../media/Wepeoples_logo.png';

const Experience = () => {
  return (
    <div className="Experience section" id="Experience">
      <br></br>
      <h1 className="Experience-title font-bold text-3xl py-4">Experience</h1>
      {/* Drakkar Digital */}
      <div className="w-3/4 lg:w-1/2 mx-auto grid grid-flow-row lg:grid-flow-col  lg:gap-4 pt-8">
        <div className="grid content-center row-span-1">
          <img
            className="w-24 lg:w-32"
            src={Drakkar_logo}
            alt="Drakkar digital logo"
          />
          <p className="py-2 text-gray-500 text-left ">Mar 2021 - Present</p>
        </div>
        <div>
          <div className="text-left font-bold text-xl py-2">
            Front-end Developer
          </div>
          <div className="job-description">
            Worked on several projects which allowed me to try several cutting
            edge technologies. Some of the things I did include, migrating a
            huge project to Typescript, development of a multiple gaming site,
            creating reusable web components and integrate them into React,
            development of a high traffic central portal where users under
            several websites can manage and access their profile.
          </div>
          <p className="text-left">Location: Montreal, Canada</p>
        </div>
      </div>
      {/* We peoples */}
      <div className="w-3/4 lg:w-1/2 mx-auto grid grid-flow-row lg:grid-flow-col lg:gap-4 pt-8">
        <div className="grid content-center">
          <img
            className="w-24 lg:w-32"
            src={Wepeoples_logo}
            alt="Wepeoples logo"
          />
          <p class="text-left lg:text-center font-bold text-green-700">
            We Peoples
          </p>
          <p className="py-2 text-gray-500 text-left ">Aug 2018 - May 2019</p>
        </div>
        <div>
          <div className="text-left font-bold text-xl py-2">
            Front end Engineer
          </div>
          <div className="job-description">
            Developed multiple UI components which include posts, comments and
            replies to an issue created. Created page navigation using react
            router and user authentication using google OAuth. Worked closely
            with the backend and UX teams for developing responsive user
            interfaces. Actively involved in the team Stand-ups, retrospective,
            code reviews and created user stories on JIRA.
          </div>
          <p className="text-left">Location: Remote</p>
        </div>
      </div>
      {/* Amazon */}
      <div className="w-3/4 lg:w-1/2 mx-auto grid grid-flow-row lg:grid-flow-col lg:gap-4 pt-8">
        <div className="grid content-center">
          <img className="w-24 lg:w-32" src={Amazon_logo} alt="Amazon logo" />
          <p className="py-2 text-gray-500 text-left ">May 2017 - Aug 2018</p>
        </div>
        <div>
          <div className="text-left font-bold text-xl py-2">
            DevOps Engineer
          </div>
          <div className="job-description">
            I have created user scripts using JavaScript to improve efficiency.
            I have developed an add-on form on the website to perform multiple
            manual updates on a single click, this reduced the action time for
            working on a task by 25%. I was as a key person in migrating an
            online ticket tracker system front-end, to align with the new
            backend. I have also worked in monitoring and analyzing all the
            changes happening in the companies transportation network using test
            deployments into the systems. I worked with various teams across the
            globe and suggested about the errors in their proposed change
            requests.
          </div>
          <p className="text-left">Location: Hyderabad</p>
        </div>
      </div>
      {/* Tech Mahindra */}
      <div className="w-3/4 lg:w-1/2 mx-auto grid grid-flow-row lg:grid-flow-col lg:gap-4 pt-8">
        <div className="grid content-center">
          <img className="w-24 lg:w-32" src={Techm_logo} alt="Techm logo" />
          <p className="py-2 text-gray-500 text-left ">Aug 2016 - Apr 2017</p>
        </div>
        <div>
          <div className="text-left font-bold text-xl py-2">
            Software Engineer
          </div>
          <div className="job-description">
            Right after my B.Tech, I joined as a software engineer in Tech
            Mahindra. Tech Mahindra is a technology company based in India with
            it's clients around the world. I worked in transactions team which
            involved working with database systems and visualization tools like
            Tableau. I have gained a good experience in working with relational
            DB's and using Tableau.
          </div>
          <p className="text-left">Location: Hyderabad</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
