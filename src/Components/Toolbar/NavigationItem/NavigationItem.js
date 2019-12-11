import React from 'react'
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    
    return (
        <a href={props.navItemName + "/"}
            key={props.navKey}> {props.navItemName}
        </a >     
        )
}

export default navigationItem;