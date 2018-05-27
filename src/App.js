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
import ProjectsPage from './components/pages/projectsPage'

//includes
import './Assests/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/ProjectsPage' component={ProjectsPage} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
