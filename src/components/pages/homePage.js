import React, { Component } from 'react';

//components
import SubFooter from '../footerComponent/subFooter';

class HomePage extends Component {
  render() {
    return (
      <div className="componentBody container-fluid">

        <div className="componentHeader">
          About page Title
        </div>

        <div className="componentMain">
        </div>

        <div className="componentFooter">
          <SubFooter />
        </div>

      </div>
    );
  }
}


export default HomePage;
