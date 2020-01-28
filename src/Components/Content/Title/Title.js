import React from 'react'

import classes from '../Title/Title.module.scss';

const title = (props) => {

    return (
        <section className={classes.Title} id="Hero">
            <div className={classes.TitleTextContainer}>
                <div className={classes.TitleTextBar}>
                    <h1 className={classes.TitleText}>
                        {props.children}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default title;