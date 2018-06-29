import React, { Component } from 'react';

//components
import SubHeader from '../headerComponent/subHeader';
import HeaderLinks from '../headerComponent/links';

class ResumePage extends Component {
  render() {
    return (
      <div className="componentBody container-fluid">

        <div className="componentHeader">
          <div>
            <h1>Jordan Fred</h1>
            <HeaderLinks />
          </div>
          <SubHeader />

        </div>

        <div className="resumeDisplay componentMain">

          <div className="titleDiv">
            <h2>Skills</h2>
          </div>

          <div className="skillContainer">

            <div className="skillList">
              <ul>
                <li><b><u>Technologies</u></b></li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>C#</li>
              </ul>
            </div>

            <div className="skillList">
              <ul>
                <li><b><u>Technologies</u></b></li>
                <li>AngularJS</li>
                <li>React.js</li>
                <li>Handlebars.js</li>
                <li>Bootstrap</li>
                <li>Sass/SCSS</li>
              </ul>
            </div>

            <div className="skillList">
              <ul>
                <li><b><u>Technologies</u></b></li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Knex.js</li>
                <li>AWS</li>
              </ul>
            </div>

            <div className="skillList">
              <ul>
                <li><b><u>Expertise</u></b></li>
                <li>Communication</li>
                <li>Agile Workflow</li>
                <li>Pair Programming</li>
                <li>Adaptability</li>
                <li>Empathy</li>
                <li>Problem Solving</li>
              </ul>
            </div>

          </div>

          <div className="titleDiv">
            <h2>Experience/Education</h2>
          </div>

          <div className="expNedu">
            <section>
              <div className="exp">
                <h4><b><u>Galvanize, Denver - 2017</u></b></h4>
                <h4>Full Stack Web Development. Javascript focused 6 month immersive course.</h4>
              </div>

              <div>
                <h4><b><u>Colorado State University - 2015</u></b></h4>
                <h4>Bachelor of Arts in Both Philosophy and Commuications</h4>
              </div>
            </section>

            <section>
              <div className="exp">
                <h4><b><u>Schwab Charitable - 2015-2016</u></b></h4>
                <h4>Grant Specialist. Managed clients charitable donations and due diligence of tax qualification of nonprofit organizations.</h4>
              </div>

              <div>
                <h4><b><u>The Breakaway Group - 2010-2012</u></b></h4>
                <h4>Multi-Media Developer. Responsible for front end production, graphic design, and quality assurance of educational applications for medical technologies.</h4>
              </div>
            </section>

          </div>


        </div>


      </div>
    );
  }
}


export default ResumePage;
