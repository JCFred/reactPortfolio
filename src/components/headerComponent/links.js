import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class HeaderLinks extends Component {
  render() {
    return (
        <div className="flex">

            <a href="https://github.com/JCFred" className="iconSmall github"></a>

            <a href="https://www.linkedin.com/in/jcfred/" className="iconSmall linkedIn"></a>

            <a href="mailto:JCFred88@gmail.com" className="iconSmall gmail"></a>

        </div>


    );
  }
}


export default HeaderLinks;
