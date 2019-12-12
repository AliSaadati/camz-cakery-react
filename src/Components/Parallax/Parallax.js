import React from 'react'

import cupcake from '../../assets/images/cupcake-bg.jpg';
import chocCupcake from '../../assets/images/chocolate-cupcakes-bg.jpg';

import classes from './Parallax.module.css'

const parallax = (props) => {
    {/* <img className={classes.Image} src={cupcake} alt="cupcake"/> */ }

    return (
        <div className={classes.Parallax}>

            <div className={classes.pimg1}>
                <div className={classes.ptext}>
                    <span className={classes.border}>Parallax Website</span>
                </div>
            </div>

            <section className={[classes.section, classes.sectionLight].join(" ")}>
                <h2>Section One</h2>
                <p>Consectetur sit velit ut deserunt ea laboris tempor est. Eu sit nulla aliqua anim tempor culpa occaecat do nisi id. Do ex ad velit reprehenderit deserunt eu ad. Voluptate irure culpa mollit ipsum anim qui et voluptate ex duis. Laborum aliquip aliquip exercitation Lorem est aliquip non velit occaecat nostrud sit minim minim. Occaecat dolore consequat nisi nulla fugiat eu aliquip proident. Esse est elit laborum exercitation.
                    Ut quis ea anim cupidatat occaecat occaecat. Velit veniam exercitation eu enim mollit qui voluptate eiusmod est. Et velit officia ad laboris veniam et. Do officia do eu ad nulla incididunt do eiusmod pariatur in enim. Laborum enim officia non consectetur labore esse culpa velit pariatur. Et nostrud Lorem exercitation minim.
                    Sint nisi ipsum nisi enim commodo est qui minim Lorem mollit nulla aliqua. Dolor ex enim cillum sunt ea nisi laboris aliqua incididunt. Officia excepteur culpa deserunt aute eu culpa.
                </p>
            </section>

            <div className={classes.pimg2}>
                <div className={classes.ptext}>
                    <span className={classes.border}>Image 2 Text</span>
                </div>
            </div>

            <section className={[classes.section, classes.sectionDark].join(" ")}>
                <h2>Section Two</h2>
                <p>Consectetur sit velit ut deserunt ea laboris tempor est. Eu sit nulla aliqua anim tempor culpa occaecat do nisi id. Do ex ad velit reprehenderit deserunt eu ad. Voluptate irure culpa mollit ipsum anim qui et voluptate ex duis. Laborum aliquip aliquip exercitation Lorem est aliquip non velit occaecat nostrud sit minim minim. Occaecat dolore consequat nisi nulla fugiat eu aliquip proident. Esse est elit laborum exercitation.
                    Ut quis ea anim cupidatat occaecat occaecat. Velit veniam exercitation eu enim mollit qui voluptate eiusmod est. Et velit officia ad laboris veniam et. Do officia do eu ad nulla incididunt do eiusmod pariatur in enim. Laborum enim officia non consectetur labore esse culpa velit pariatur. Et nostrud Lorem exercitation minim.
                </p>
            </section>

            <div className={classes.pimg3}>
                <div className={classes.ptext}>
                    <span className={classes.border}>Image Three Text</span>
                </div>
            </div>

            <section className={[classes.section, classes.sectionDark].join(" ")}>
                <h2>Section Three</h2>
                <p>Consectetur sit velit ut deserunt ea laboris tempor est. Eu sit nulla aliqua anim tempor culpa occaecat do nisi id. Do ex ad velit reprehenderit deserunt eu ad. Voluptate irure culpa mollit ipsum anim qui et voluptate ex duis. Laborum aliquip aliquip exercitation Lorem est aliquip non velit occaecat nostrud sit minim minim. Occaecat dolore consequat nisi nulla fugiat eu aliquip proident. Esse est elit laborum exercitation.
                    Ut quis ea anim cupidatat occaecat occaecat. Velit veniam exercitation eu enim mollit qui voluptate eiusmod est. Et velit officia ad laboris veniam et. Do officia do eu ad nulla incididunt do eiusmod pariatur in enim. Laborum enim officia non consectetur labore esse culpa velit pariatur. Et nostrud Lorem exercitation minim.
                </p>
            </section>


            <div className={classes.pimg1}>
                <div className={classes.ptext}>
                    <span className={classes.border}>Parallax Website</span>
                </div>
            </div>
        </div>
    )
}

export default parallax;
