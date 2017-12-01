import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './pages.scss';

import Home from './home/home';
import Help from './help/help';

class Pages extends React.Component {
	render() {
		return (
			<Router>
				<div className='pages-container'>
					<Route exact path='/' component={ () => <Home /> } />
					<Route exact path='/help' component={ () => <Help />} />
				</div>
			</Router>
		)
	}
}

export default Pages;
