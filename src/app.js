import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Routes from './components/utility/Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="h-100 flex flex-column">
          <Navbar />
          <main className="flex-auto ph2 pv4 mt5 w-100 mw7 center">
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
