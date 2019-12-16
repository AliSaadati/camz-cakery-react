import React from 'react'
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem'
import Logo from '../Logo/Logo'

const navigationItems = (props) => {
    const navItems = Object.keys(props.navItems)
        .map(navKey => {
            return (
                <li className={classes.ListItem}>
                    <NavigationItem
                        key={navKey}
                        navItemName={props.navItems[navKey]}>
                    </NavigationItem>
                </li>
            )
        });

    let logoPosition = 0;

    if (props.centeredLogo) logoPosition = navItems.length / 2;
    // if (navItems.length % 2 === 1) {
    // navItems.push(<div
    //     key={navItems.length+1}
    //     ></div>);
    // }
    navItems.splice(logoPosition, 0, <li className={classes.ListItem}>{props.children}</li>)


    return (
        <nav className={[classes.Menu, (!props.menuIsOpen ? classes.Hide : null)].join(" ")}>
            <ul className={classes.List}>
                {navItems}
            </ul>
        </nav>
    )
};

export default navigationItems;