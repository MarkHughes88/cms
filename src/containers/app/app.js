import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../styles/scss/main.scss';
import './app.scss';

import Home from '../home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ () => <Home />} />
        </div>
      </Router>
    );
  }
}

export default App;
