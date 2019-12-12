import React from 'react'
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem'
import Logo from '../Logo/Logo'

const navigationItems = (props) => {
    const navItems = Object.keys(props.navItems)
        .map(navKey => {
            return (
                <NavigationItem
                    key={navKey}
                    navItemName={props.navItems[navKey]}></NavigationItem>
            )
        });

    let logoPosition = 0;

    if (props.centeredLogo) logoPosition = navItems.length / 2;
        // if (navItems.length % 2 === 1) {
        // navItems.push(<div
        //     key={navItems.length+1}
        //     ></div>);
        // }
        navItems.splice(logoPosition, 0, props.children)

    
    return (
        <nav className={!props.menuIsOpen ? classes.Hide : null}>
            {navItems}
        </nav>
    )
};

export default navigationItems;