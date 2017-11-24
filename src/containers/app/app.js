import React, { Component } from 'react';

import '../../styles/scss/main.scss';
import './app.scss';

import Content from '../content/content';
import Menu from '../menu/menu';

class App extends Component {
  render() {
    return (
        <div className='container-fluid app-container'>
            <Menu />
            <Content />
      </div>
    );
  }
}

export default App;
