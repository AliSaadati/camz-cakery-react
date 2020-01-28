import React from 'react'
import classes from './Logo.module.scss';

const logo = (props) => {


    let width = props.width || "auto";
    let height = props.height || "auto";
    let source = props.source || "/images/logos/Cakery-Logo.png";

    return (
        <img 
            className={classes.Logo} 
            style={{"height": height, "width": width}} 
            src={source} 
            alt="Camille's Cakery Logo" />
    )
}

export default logo;