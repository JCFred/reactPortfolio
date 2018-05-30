import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header id="mainHeader">

        <div className="logo">
        Jordan Fred
        </div>

        <nav>
          <ul id="parent-list">
            <li className="first">
              <div >
                <Link to="/">About</Link>
              </div>
            </li>
            <li>
              <Link className="componentLink" to="/ProjectsPage">Projects</Link>
            </li>
            <li className="last">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
