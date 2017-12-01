import React from 'react';

import './link.scss';

class Link extends React.Component {
	render() {
		return (
			<a href={
				this.props.text === 'Home' || this.props.text === 'Help' ?
				this.props.URL :
				null
				}
				onClick={ () => this.props.toggleSlider() }
			>
				<li className='menu__links__item'>{this.props.text}</li>
			</a>
		)
	}
}

export default Link;
