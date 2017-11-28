import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../styles/scss/main.scss';
import './menu-slider.scss'
// import Pages from './pages/pages';

class MenuSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			currPage: false
		}
	}

	render() {
		return (
			<div
				className={
					`menu__bar__slider ${this.props.active ?
					'menu__bar__slider--visible' :
					'menu__bar__slider--hidden'}`
				}>
				Menu slider
			</div>
		)
	}
}

export default MenuSlider;
