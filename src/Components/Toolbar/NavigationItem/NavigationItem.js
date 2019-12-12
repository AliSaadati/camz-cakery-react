import React from 'react'
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {

    return (
        <li>
            <a href={props.navItemName + "/"}
                key={props.navKey}> {props.navItemName}
            </a >
        </li>
    )
}

export default navigationItem;