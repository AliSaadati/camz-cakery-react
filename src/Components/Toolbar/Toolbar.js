import React, { Component } from 'react';
import classes from './Toolbar.module.scss';
import Hamburger from '../Toolbar/Hamburger/Hamburger'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import Logo from './Logo/Logo';

const navItems = ['Story', 'Packages', {'Products': ['Cookies', 'Cupcakes', 'Cakepops', 'Cakes', 'Sweet Treats', 'Keto Friendly']}, 'Gallery', 'Contact', 'Reviews'];

class Toolbar extends Component {

    componentDidMount() {
        this.updateBurgerState();
        window.addEventListener('resize', this.updateBurgerState.bind(this));
    }
    
    state = {
        showBurgerMenu: false,
        burgerIconDisplayed: true
    }

    updateBurgerState() {
        if (window.innerWidth > 750) {
            this.hideBurgerMenu();
        }
        else this.displayBurgerIcon();
    }

    toggleBurger = () => {
        this.setState((prevState) => {
            return { showBurgerMenu: !prevState.showBurgerMenu }
        });
    }

    hideBurgerMenu = () => {
        this.setState({showBurgerMenu: false, burgerIconDisplayed: false});
    }

    displayBurgerIcon = () => {
        this.setState({burgerIconDisplayed: true});
    }

    render() {
        return (
            <div className={classes.ToolbarContainer}>
                <header className={classes.Toolbar} >
                    <Hamburger
                        toggleBurger={this.toggleBurger}
                        sideMenuIsOpen={this.state.showBurgerMenu}>
                    </Hamburger>
                    <NavigationItems
                        navItems={navItems}
                        centeredLogo={true}
                        sideMenuIsOpen={this.state.showBurgerMenu}
                        burgerIconDisplayed={this.state.burgerIconDisplayed}>
                        <Logo 
                            className={classes.Logo}
                            height="130px"
                            />
                    </ NavigationItems>

                </header>
            </div>
        )
    }
}

export default Toolbar;