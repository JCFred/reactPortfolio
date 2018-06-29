import React, { Component } from 'react';


class SplashPage extends Component {
  render() {
    return (
      <div className="splashWrap container-fluid">
        <div className="snow">
          <div className="flakes1"></div>
          <div className="flakes2"></div>
          <div className="flakes3"></div>
        </div>
        <div id="denver1"></div>
        <div id="denver2"></div>
        <div id="denver3"></div>
        <div id="denver4"></div>
        <div id="denver5"></div>

        <div id="movingBackground">
          <h1 id="titleText">Full Stack Developer in Denver</h1>

          <div className="personalLinks">

            <a href="https://github.com/JCFred" className="icon github"></a>

            <a href="https://www.linkedin.com/in/jcfred/" className="icon linkedIn"></a>

            <a href="mailto:JCFred88@gmail.com" className="icon gmail"></a>

          </div>


          <div className="scrollDownBtn"></div>

        </div>





      </div>
    );
  }
}

export default SplashPage;
