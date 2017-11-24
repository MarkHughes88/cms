import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './content.scss';

import Home from '../home/home';

class Content extends Component {
  render() {
    return (
		<div className='app-container__content'>
			<Router>
	  		  	<Route exact path="/" component={ () => <Home /> } />
	  	  	</Router>
		</div>
    );
  }
}

export default Content;
