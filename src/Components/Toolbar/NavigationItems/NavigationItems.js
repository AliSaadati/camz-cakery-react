import React from 'react'

import classes from './NavigationItems.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem'

const navigationItems = (props) => {

    // populate list of items in NavBar
    const navItems = Object.keys(props.navItems)
        .map(navKey => {
            let subItems = null
            let item = null
            if (typeof props.navItems[navKey] === 'object' && props.navItems[navKey] != null) {
                item = Object.keys(props.navItems[navKey])[0]
                Object.keys(props.navItems[navKey])
                    .map(navSubKey => {
                        subItems = Object.keys(props.navItems[navKey][navSubKey])
                            .map(subItem => {
                                return (
                                    props.navItems[navKey][navSubKey][subItem]
                                )
                            })
                    });
            }

            return (
                <li className={item ? [classes.ListItem, classes.Front].join(" ") : classes.ListItem}>
                    <NavigationItem
                        key={navKey}
                        navItemName={item ? item : props.navItems[navKey]}
                        sideMenuIsOpen={props.sideMenuIsOpen}>
                        {subItems}
                    </NavigationItem>
                </li>
            )
        });


    // Prepare NavBar items for logo to be centered
    let logoPosition = 0, right = null, left = null, center = null;

    if (props.centeredLogo && !props.burgerIconDisplayed) {
        logoPosition = navItems.length / 2;
        navItems.splice(logoPosition, 0, <li key={"added"} className={classes.ListItemLogo}>{props.children}</li>)
        left = navItems.splice(0, Math.floor(navItems.length / 2));
        center = navItems.splice(0,1);
        right = navItems;
    }
    // JSX to center logo in NavBar
    let navAdjusted = props.centeredLogo ?
        <ul className={classes.List}>
            <div className={classes.Left}>{left}</div>
            <div className={classes.Center}>{center}</div>
            <div className={classes.Right}>{right}</div>
        </ul> :
        <ul className={classes.List}>
            {navItems}
        </ul>


    return (
        <nav className={[classes.Menu, (props.sideMenuIsOpen ? null : classes.Hide)].join(" ")}>
            {navAdjusted}
        </nav>
    )
};

export default navigationItems;