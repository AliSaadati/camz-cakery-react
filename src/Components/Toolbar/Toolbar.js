import React from 'react';
import classes from './Toolbar.module.css';
import Hamburger from '../Toolbar/Hamburger/Hamburger'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import SideDrawer from '../Toolbar/SideDrawer/SideDrawer'   

const toolbar = (props) => {

    const navItems = ['Home', 'Packages', 'Products', 'Gallery', 'Contact']
    return (
        <div className={classes.ToolbarContainer}>
            <header className={classes.Toolbar} >
                <Hamburger></Hamburger>
                <NavigationItems
                    navItems={navItems}
                    centeredLogo={true}>
                </NavigationItems>
                <SideDrawer>

                </SideDrawer>
            </header>
        </div>
    )
}

export default toolbar;