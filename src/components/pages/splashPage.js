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

        <div id="welcome">
          <h1 id="titleText">Front End Developer in Denver</h1>
        </div>

      </div>
    );
  }
}

export default SplashPage;
