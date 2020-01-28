import React, { Component } from 'react'
import classes from './Hamburger.module.css';

class Hamburger extends Component {

    render() {

        let toggleMenuClass = this.props.sideMenuIsOpen ? 
            [classes['is-active'], classes.hamburger, classes['hamburger-elastic']] : 
            [classes.hamburger, classes['hamburger-elastic']];

        return (
            <button
                className={toggleMenuClass.join(" ")} 
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
                onClick={() => {this.props.toggleBurger()}}>
                <span className={classes["hamburger-box"]}>
                    <span className={classes["hamburger-inner"]}></span>
                </span>
            </button>
        );
    }
}

export default Hamburger;