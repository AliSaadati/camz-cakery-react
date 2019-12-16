import React from 'react'
import image from '../../../assets/images/cupcake-logo-trans.png'
import classes from './Logo.module.scss';

const logo = (props) => (
    <img className={classes.Logo} src={image} />
)

export default logo;