import React from 'react';

import '../../styles/scss/main.scss';
import './menu.scss';

import menu from '../../menu.json';
import User from '../../components/menu-user/menu-user';
import Link from '../../components/menu-link/menu-link';
import Slider from '../../components/menu-slider/menu-slider';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            slider: {
                active: false,
                content: null
            }
        }
    }

    setSliderState(active, content) {
        /* note the ES6 usage of `content` and `active` below. Which will actually output: `active: active, content: content` */
        this.setState({
            slider: {
                active,
                content
            }
        })
    };

    toggleSlider(text) {
        let dontToggle = (text === 'Home') || (text === 'Help');

        !dontToggle
            ?
            this.setSliderState(
                !this.state.slider.active || this.state.slider.content !== text,
                text
            )
            : this.setSliderState(false)
    };

    render() {
        var Links = menu.Links.map(link => {
            return (
                <Link
                    key={ link.id }
                    text={ link.text }
                    icon={ link.icon }
                    link={ link.link }
                    toggleSlider={ (text) => this.toggleSlider(text) }
                />
            )
        });

        return (
            <div className='menu'>
                <div className='menu__bar'>
                    <User />

                    { Links }
                </div>

                <Slider active={this.state.slider.active} content={ this.state.slider.content } />
            </div>
        )
    }
}

export default Menu;
