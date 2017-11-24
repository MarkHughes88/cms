import React from 'react';

import '../../styles/scss/main.scss';
import './menu-user.scss';

import myJson from '../../users.json';

class MenuUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		let users = myJson.Users.map((user, key) => {
			return {key: user.id,username: user.Username};
		})
		this.setState({users: users});
	}

	render() {
		return (
			<div className='menu-user'>
				<img src='http://via.placeholder.com/75x75' className='img-circle center-block img-responsive' alt='' />
				<h4>Admin</h4>
			</div>
		)
	}
}

export default MenuUser;
