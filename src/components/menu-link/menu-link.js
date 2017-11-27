import React from 'react';

import './menu-link.scss'

class MenuLink extends React.Component {
    render() {
        return (
            <a className="menu-link" onClick={ () => this.props.toggleSlider() }>
                <li className="menu-link__container">
                    <span className={ this.props.icon }></span>
                    <span className="menu-link__container__text">{ this.props.text }</span>
                </li>
            </a>
        )
    }
}

export default MenuLink;
