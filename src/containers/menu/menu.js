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
                active: false
            },
            menu: menu
        }
    }

    toggleSlider() {
        this.setState({
            slider: {
                active: !this.state.slider.active
            }
        });
    };

    render() {
        let Links = menu.Links.map(link => {
            return (
                <Link
                    key={ link.id }
                    text={ link.text }
                    icon={ link.icon }
                    link={ link.link }
                    toggleSlider={ () => this.toggleSlider() }
                />
            )
        });

        return (
            <div className='menu'>
                <div className='menu__bar'>
                    <User />

                    { Links }
                </div>

                <Slider active={this.state.slider.active} />
            </div>
        )
    }
}

export default Menu;
