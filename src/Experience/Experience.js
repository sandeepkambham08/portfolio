import './Experience.css';
import Amazon_logo from '../media/Amazon-logo.png';
import Techm_logo from '../media/Techm-logo.png'

const Experience = () => {
    return (
        <div className='Experience section' id="Experience">
            <br></br>
            <h1 className='Experience-title' >Experience</h1>
            <div className='Experiences'>
                {/* <div className='Experience-item row' >
                    <div className='col-md-10'>
                        <h4>Startselect | Online Prepaid Services</h4>
                    </div>
                    <p>Amazon</p>
                </div>
                <div>
                    <h3>Software Engineer</h3>
                    <p>Tech Mahindra</p>
                </div> */}
                <table className='Experience-table'>
                    <tr>
                        {/* <td className='Company-name'>Amazon</td> */}
                        {/* <td ><img className='Company-logo' src={Amazon_logo}/></td> */}
                        <td></td>
                        <td className='job-role'>Analyst/Developer</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className='Worked-years'><img className='Company-logo' src={Amazon_logo} />
                            <br></br>
                            <br></br>May 2017 - Aug 2018</td>
                        <td className='job-description'>
                            I have created userscripts using JavaScript to improve efficiency. 
                            I have developed an add-on form on the website to perform multiple manual updates on a single click,
                            this reduced the action time for working on a task by 25%.
                            I was as a key person in migrating an online ticket tracker system front-end,
                            to align with the new backend.
                            I have also worked in monitoring and analyzing all the changes happening in the companies transportation network using test
                            deployments into the systems.
                            I worked with various teams across the globe and suggested about the errors in their proposed change requests. 
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='job-location'>Location: Hyderabad </td>
                    </tr>
                    <br></br>
                    <br></br>
                    <br></br>
                    <tr>
                        <td className='Company-name'></td>
                        <td className='job-role'>Software Engineer</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className='Worked-years'><img className='Company-logo' src={Techm_logo} />
                            <br></br>
                            <br></br>
                        Aug 2016 - Apr 2017</td>
                        <td className='job-description'>
                            Right after my B.Tech, I joined as a software engineer in Tech Mahindra. 
                            Tech Mahindra is a technology company based in India with it's clients around the world. 
                            I worked in transactions team which involved working with database systems and visualization tools like Tableau. 
                            I have gained a good experience in working with relational DB's and using Tableau. 
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='job-location'>Location: Hyderabad </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Experience;