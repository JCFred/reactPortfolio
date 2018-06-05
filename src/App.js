import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import ProjectsPage from './components/pages/projectsPage';
import SplashPage from './components/pages/splashPage';

//includes
import './Assests/css/default.min.css';
import './components/pages/parallaxControl.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

        <SplashPage />
        <div className="mainContent">
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Projects' component={ProjectsPage} />
        </div>

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
