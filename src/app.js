import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/utility/Navbar';
// import Footer from './components/utility/Footer';
import Routes from './components/utility/Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
