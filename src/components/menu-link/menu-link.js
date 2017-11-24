import React from 'react';
import './menu-link.scss'

const MenuLink = ({ id, text, icon, link }) => {
  return (
    <a className="menu-link" href={link}>
      <li a className="menu-link__container">
        <span className={icon}></span>
        <span className="menu-link__container__text">{text}</span>
      </li>
    </a>
  )
}

export default MenuLink;
