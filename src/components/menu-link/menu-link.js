import React from 'react';

import './menu-link.scss'

import MenuSlider from '../menu-slider/menu-slider';

const MenuLink = ({ id, text, icon, link }) => {
  return (
    <a className="menu-link" onClick={MenuSlider.toggleClass}>
      <li a className="menu-link__container">
        <span className={icon}></span>
        <span className="menu-link__container__text">{text}</span>
      </li>
    </a>
  )
}

export default MenuLink;
