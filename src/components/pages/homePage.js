import React, { Component } from 'react';

//components
import SubHeader from '../headerComponent/subHeader';
import HeaderLinks from '../headerComponent/links';




class HomePage extends Component {
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

        <div className="componentMain">

          <div className="about">
              <section className="aboutFiller">
                <div className="aboutPic"></div>

              </section>

              <section className="aboutContent">
                <h2>
                My name is Jordan Fred and I am a front end developer in the beautiful city of Denver, Colorado.
                I enjoy collaborating on projects and making valuable contributions toward amazing applications.
                I have professional experience, am trained in web development, and hold two college degrees in Philosophy and Communications.
                </h2>

                <div className="aboutIcons">
                  <div className="graduate"></div>
                  <div className="globalTravel"></div>
                  <div className="developer"></div>
                </div>

                <h2>
                Passionate about writting and public speaking, I love to teach others about abstract concepts through everyday language.
                As an avid puzzler I seek out new challanges that require logical solutions.
                Although a Colorado native, I frequiently travel to meet new people and gain a more diverse perspective.
                </h2>
              </section>
          </div>

        </div>


      </div>
    );
  }
}


export default HomePage;
