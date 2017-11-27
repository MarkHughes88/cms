import React from 'react';

import '../../styles/scss/main.scss';
import './menu-slider.scss'

class MenuSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			active: false
		};
	}

	toggleClass() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	};

	render() {
		return (
			<div className={ `menu__bar__slider ${this.state.active ? 'menu__bar__slider--visible' : 'menu__bar__slider--hidden'}` }>
				Menu Slider
			</div>
		)
	}
}

export default MenuSlider;
