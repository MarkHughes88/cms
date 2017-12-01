import React, { Component } from 'react';

import '../../styles/scss/main.scss';
import './app.scss';

import Menu from '../menu/menu';
import Pages from '../pages/pages';

class App extends Component {
    render() {
        return (
            <div className='container-fluid app-container'>
                <Menu />
                <Pages />
            </div>
        );
    }
}

export default App;
