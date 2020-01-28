import React from 'react'

import classes from './ProductBox.module.scss'

const productBox = (props) => {

    return (
        <div className={classes.ProductContainer}>
            <div className={classes.ImageContainer}>
                <img
                    className={classes.Image}
                    src={props.image}
                    alt={props.description}></img>
            </div>
            <h3 className={classes.Title}>{props.description}</h3>
            <p className={classes.Ingredients}>{props.ingredients}</p>
        </div>
    )
}

export default productBox;