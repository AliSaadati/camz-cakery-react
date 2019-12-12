import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import Hamburger from '../Toolbar/Hamburger/Hamburger'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import SideDrawer from '../Toolbar/SideDrawer/SideDrawer';
import Logo from './Logo/Logo';
const navItems = ['Home', 'Packages', 'Products', 'Gallery', 'Contact'];

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateBurgerMenuState();
        window.addEventListener('resize', this.updateBurgerMenuState.bind(this));
    }
    state = {
        showBurgerMenu: false
    }

    updateBurgerMenuState() {
        if (window.innerWidth > 600) {
            this.hideBurgerMenu();
        }
    }

    toggleBurgerMenu = () => {
        this.setState((prevState) => {
            return { showBurgerMenu: !prevState.showBurgerMenu }
        });
    }

    hideBurgerMenu = () => {
        this.setState({showBurgerMenu: false});
    }

    render() {
        return (
            <div className={classes.ToolbarContainer}>
                <header className={classes.Toolbar} >
                    <Hamburger
                        toggleBurger={this.toggleBurgerMenu}
                        menuIsOpen={this.state.showBurgerMenu}>
                    </Hamburger>
                    <NavigationItems
                        navItems={navItems}
                        centeredLogo={true}
                        menuIsOpen={this.state.showBurgerMenu}>
                        <Logo />
                    </NavigationItems>

                </header>
            </div>
        )
    }
}

export default Toolbar;