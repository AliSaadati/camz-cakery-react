import React, { Component } from 'react'
import classes from './Hamburger.module.css';

class Hamburger extends Component {

    state = {
        isToggle: false
    }

    toggleMenuHandler = () => {
        this.setState({isToggle: !this.state.isToggle});
    }

    render() {
        
        let toggleMenuClass = this.state.isToggle ? 
            [classes['is-active'], classes.hamburger, classes['hamburger-elastic']] : 
            [classes.hamburger, classes['hamburger-elastic']];

        return (
            <button
                className={toggleMenuClass.join(" ")} 
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
                onClick={this.toggleMenuHandler}>
                <span className={classes["hamburger-box"]}>
                    <span className={classes["hamburger-inner"]}></span>
                </span>
            </button>
        );
    }
}

export default Hamburger;