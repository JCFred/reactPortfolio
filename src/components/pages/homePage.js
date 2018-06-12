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
                I am a full stack web developer interested in both front and back end positions. I enjoy collaborating on projects and am a natural leader. I am passionate about innovative and unique applications, and enjoy creating my own in my free time. I enjoy mountain biking, hiking, and camping.
                </h2>
                <h2>
                I am a full stack web developer interested in both front and back end positions. I enjoy collaborating on projects and am a natural leader. I am passionate about innovative and unique applications, and enjoy creating my own in my free time. I enjoy mountain biking, hiking, and camping.
                </h2>
              </section>
          </div>

        </div>


      </div>
    );
  }
}


export default HomePage;
