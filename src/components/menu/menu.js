import React from 'react';
import './menu.scss';

import data from '../../data/menu.json';
import Link from './link/link';
import Slider from './slider/slider';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slider: {
				active: false
			}
		}
	}

	toggleSlider() {
		this.setState({this.state.active: !this.state.active})
		console.log(this.state.active)
	}

	render() {
		var Links = data.Links.map(link => {
			return (
				<Link
					key={ link.id }
					text={ link.text }
					URL={ link.URL }
					toggleSlider={ () => this.toggleSlider() }
				/>
			)
		});

		return (
			<div className='menu'>
				<div className='menu__bar'>
					<ul className='menu__bar__links'>
						{ Links }
					</ul>
				</div>
				<div className={`menu__slider ${!this.state.slider.active ?  'menu__slider--hidden' : 'menu__slider--active'}`}>
					<Slider />
				</div>
			</div>
		)
	}
}

export default Menu;
