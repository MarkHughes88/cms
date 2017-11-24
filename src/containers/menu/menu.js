import React from 'react';

import '../../styles/scss/main.scss';
import './menu.scss';

import User from '../../components/menu-user/menu-user';
import Link from '../../components/menu-link/menu-link';
import myJson from '../../menu.json';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuLinks: []
    }
  }

  componentDidMount() {
    let Links = myJson.Links.map((Links, key) => {
      return (
        <Link
          key={Links.id}
          text={Links.text}
          icon={Links.icon}
          link={Links.link}
        />
      )
    })
    this.setState({menuLinks: Links}); // <--
  }

	render() {
		return (
			<div className='menu'>
				<User />
				{this.state.menuLinks}
			</div>
		)
	}
}

export default Menu;
