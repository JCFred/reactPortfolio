import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class HeaderLinks extends Component {
  render() {
    return (
        <div className="flex">

            <a className="iconSmall github"></a>

            <a className="iconSmall linkedIn"></a>

            <a className="iconSmall gmail"></a>

        </div>


    );
  }
}


export default HeaderLinks;
