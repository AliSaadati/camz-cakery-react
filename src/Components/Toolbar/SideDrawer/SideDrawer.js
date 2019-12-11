import React from 'react'
import classes from './SideDrawer.module.css';
import NavigationItem from '../NavigationItem/NavigationItem'
const sideDrawer = (props) => {

    const navItems = Object.keys(props.navItems)
        .map(navKey => {
            return (
                <NavigationItem
                    key={navKey}
                    navItemName={props.navItems[navKey]}>
                </NavigationItem>
            )
        });

    return (
        <nav className={classes.Mobile}>
            {navItems}
        </nav>
    )
}

export default sideDrawer;