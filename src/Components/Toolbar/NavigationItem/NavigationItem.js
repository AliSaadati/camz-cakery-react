import React from 'react'
import classes from './NavigationItem.module.scss';

const navigationItem = (props) => {

    return (
        <div className={classes.Wrapper}>
        <a className={classes.NavItem} href={props.navItemName + "/"}
            key={props.navKey}> {props.navItemName}
        </a >
        </div>
    )
}

export default navigationItem;