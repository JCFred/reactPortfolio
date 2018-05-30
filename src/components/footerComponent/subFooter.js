import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class SubFooter extends Component {
  render() {
    return (
      <footer className="subFoot">
        <div>
          subFooter
        </div>

          <div className="flex">
          <nav>
            <ul>
              <li>
                <div >
                  <Link to="/">About</Link>
                </div>
              </li>
              <li>
                <Link className="componentLink" to="/ProjectsPage">Projects</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="scrollBtn" onClick={scrollUp}> to top</div>
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

export default SubFooter;
