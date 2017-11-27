import React, { Component } from 'react';

import { home } from '../../texts.json';

import './home.scss';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            JumbotronTitle: home.jumbotron.title,
            JumbotronText:  home.jumbotron.text
        }
    }

    render() {
        return (
            <div className='container-fluid home-container'>
                <div className='row'>
                    <div className='col-md-offset-1 col-md-10'>
                        <div className='jumbotron center-block'>
                            <h1>{this.state.JumbotronTitle}</h1>
                            <p>{this.state.JumbotronText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
