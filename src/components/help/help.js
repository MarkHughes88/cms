import React, { Component } from 'react';

import { help } from '../../texts.json';

import './help.scss';

class Help extends Component {
    constructor() {
        super();
        this.state = {
            Title: help.title,
            Desc: help.desc
        }
    }

    render() {
        return (
            <div className='container-fluid help-container'>
                <h1>{this.state.Title}</h1>
                <p>{this.state.Desc}</p>
				<img src='http://via.placeholder.com/400x400' alt='placeholder'/>
            </div>
        );
    }
}

export default Help;
