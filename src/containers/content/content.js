import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './content.scss';

import Home from '../../components/home/home';
import Help from '../../components/help/help';

class Content extends Component {
  render() {
    return (
        <Router>
            <div className='app-container__content'>
                <Route exact path="/" component={ () => <Home /> } />
	  		  	<Route exact path="/Help" component={ () => <Help /> } />
            </div>
        </Router>
    );
  }
}

export default Content;
