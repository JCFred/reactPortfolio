import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class SubHeader extends Component {
  render() {
    return (
      <footer className="subHead">
          <div className="flexBot">

          <nav>
            <ul>
              <li>
                <div >
                  <Link to="/">About</Link>
                </div>
              </li>
              <li>
                <Link className="componentLink" to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Resume">Resume</Link>
              </li>
            </ul>
          </nav>

          <div className="scrollUpBtn" onClick={scrollUp}> to top</div>

        </div>
      </footer>

    );
  }
}


function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export default SubHeader;
