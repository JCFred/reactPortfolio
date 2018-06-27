import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class HeaderLinks extends Component {
  render() {
    return (
        <div className="flex">

            <a href="https://github.com/JCFred" className="iconSmall githubWhite"></a>

            <a href="https://www.linkedin.com/in/jcfred/" className="iconSmall linkedInWhite"></a>

            <a href="mailto:JCFred88@gmail.com" className="iconSmall gmailWhite"></a>

        </div>


    );
  }
}


export default HeaderLinks;
