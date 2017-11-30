import React, { Component } from 'react';

import '../../styles/scss/main.scss';
import './app.scss';

class App extends Component {
  render() {
    return (
        <div className='container-fluid app-container'>
            <span className='text-center'>
                <h1>Blank React Project using Boostrap 4.0.0-beta.2 and SCSS</h1>
                <img src='https://akibapress.com/wp-content/uploads/2017/07/social-1.jpg' className='img-fluid mx-auto d-block rounded-circle app-img' />
            </span>
      </div>
    );
  }
}

export default App;
