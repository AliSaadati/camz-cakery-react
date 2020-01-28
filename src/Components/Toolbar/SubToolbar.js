import React, { Component } from 'react';
import classes from './SubToolbar.module.scss';
import Hamburger from './Hamburger/Hamburger'
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo';
import Aux from '../../Hoc/Aux'

const navItems = ['Story', 'Packages', {'Products': ['Cookies', 'Cupcakes', 'Cakepops', 'Cakes', 'Sweet Treats', 'Keto Friendly']}, 'Gallery', 'Contact', 'Reviews'];

class SubToolbar extends Component {

    componentDidMount() {
        this.updateBurgerState();
        window.addEventListener('resize', this.updateBurgerState.bind(this));
        window.addEventListener('scroll', this.updateToolbarScrollPosition.bind(this))
    }
    
    state = {
        showBurgerMenu: false,
        burgerIconDisplayed: true,
        showToolbar: false
    }

    updateBurgerState() {
        if (window.innerWidth > 750) {
            this.hideBurgerMenu();
        }
        else this.displayBurgerIcon();
    }

    updateToolbarScrollPosition() {
        var topofDiv = document.getElementById("Hero").offsetTop; //gets offset of header
        var height = document.getElementById("Hero").offsetHeight; //gets height of header
        if (window.scrollY >= topofDiv + height && !this.state.showToolbar){
            this.setState({showToolbar: true})
        }
        if (window.scrollY < topofDiv + height && this.state.showToolbar) {
            this.setState({showToolbar: false})
        }
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
        let toolbarClasses = [classes.ToolbarContainer];

        if (this.state.showToolbar) 
            toolbarClasses = [classes.ToolbarContainer, classes.Display]
        
        return (
            <Aux>
                <div className={toolbarClasses.join(" ")}>
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
                            height="50px"
                            source="/images/logos/Cakery-Logo-NoText.png"/>
                    </NavigationItems>

                </header>
            </div> 
            </Aux>
        )
    }
}

export default SubToolbar;