import './Experience.css';
import Drakkar_logo from '../media/drakkar-logo.png';
import Amazon_logo from '../media/Amazon-logo.png';
import Techm_logo from '../media/Techm-logo.png';
import Wepeoples_logo from '../media/Wepeoples_logo.png';

import Job_item from './Job_Item/Job_item';

const Experience = () => {
  return (
    <div className="Experience section" id="Experience">
      <br></br>
      <h1 className="Experience-title font-bold text-3xl py-4">Experience</h1>
      {/* Drakkar Digital */}
      <Job_item
        logo={Drakkar_logo}
        logoAltText="Drakkar digital logo"
        jobPeriod="Mar 2021 - Present"
        jobTitle="Front-end Developer"
        jobDescription="Worked on several projects which allowed me to try several cutting
            edge technologies. Some of the things I did include, migrating a
            huge project to Typescript, development of a multiple gaming site,
            creating reusable web components and integrate them into React,
            development of a high traffic central portal where users under
            several websites can manage and access their profile."
        jobLocation="Montreal, Canada"
      />
      {/* We peoples */}
      <Job_item
        logo={Wepeoples_logo}
        logoAltText="Wepeoples logo"
        company="wepeoples"
        jobPeriod="Aug 2018 - May 2019"
        jobTitle="Front end Engineer"
        jobDescription="Developed multiple UI components which include posts, comments and
            replies to an issue created. Created page navigation using react
            router and user authentication using google OAuth. Worked closely
            with the backend and UX teams for developing responsive user
            interfaces. Actively involved in the team Stand-ups, retrospective,
            code reviews and created user stories on JIRA."
        jobLocation="Remote"
      />

      {/* Amazon */}

      <Job_item
        logo={Amazon_logo}
        logoAltText="Amazon logo"
        jobPeriod="May 2017 - Aug 2018"
        jobTitle="DevOps Engineer"
        jobDescription="I have created user scripts using JavaScript to improve efficiency.
            I have developed an add-on form on the website to perform multiple
            manual updates on a single click, this reduced the action time for
            working on a task by 25%. I was as a key person in migrating an
            online ticket tracker system front-end, to align with the new
            backend. I have also worked in monitoring and analyzing all the
            changes happening in the companies transportation network using test
            deployments into the systems. I worked with various teams across the
            globe and suggested about the errors in their proposed change
            requests."
        jobLocation="Hyderabad"
      />

      {/* Tech Mahindra */}
      <Job_item
        logo={Techm_logo}
        logoAltText="Techm logo"
        jobPeriod="Aug 2016 - Apr 2017"
        jobTitle="Software Engineer"
        jobDescription="Right after my B.Tech, I joined as a software engineer in Tech
            Mahindra. Tech Mahindra is a technology company based in India with
            it's clients around the world. I worked in transactions team which
            involved working with database systems and visualization tools like
            Tableau. I have gained a good experience in working with relational
            DB's and using Tableau."
        jobLocation="Hyderabad"
      />
    </div>
  );
};

export default Experience;
