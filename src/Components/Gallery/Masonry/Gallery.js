import * as React from 'react';
import Masonry from 'react-masonry-component';
import Title from '../../Content/Title/Title';
import Aux from '../../../Hoc/Aux';

import './Gallery.css'
import classes from './Gallery.module.scss'

const masonryOptions = {
    transitionDuration: 250,
    itemSelector: ".ImageContainer",
    columnWidth: 300,
    fitWidth: true,
    gutter: 20,
    stagger: 10

  };

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const fileArr = ["cake-chocolate.jpg", "cookie-chocolate-chip.jpg", "cupcake-tiedye.jpg", "cake-naked.jpg", "cookie-crinkle.jpg", "cupcake-vanilla.jpg", "cake-strawberry.jpg", "cookie-snickerdoodle.jpg", "gall-cakepop1.jpg", "cake-white.jpg", "cupcake-chocolate.jpg", "gall-cakepop2.jpg", "cakepop-babypink.jpg", "cupcake-lemon.jpg", "gall-cupcakes.jpg", "cakepop-funfetti.jpg", "cupcake-marble.jpg", "keto-friendly-coconut.jpg", "cakepop-lemon.jpg", "cupcake-red-velvet.jpg", "sweets-chocolate-pretzel-rods.jpg", "cakepop-red-velvet.jpg", "cupcake-smore.jpg", "sweets-chocolate-strawberries.jpg", "cakepop-vanilla.jpg", "cupcake-strawberry.jpg"]

class Gallery extends React.Component {

    render() {

        var galleryItems = [];

        for (let i = 0; i < 20; i++) {
            galleryItems.push(
                <div className="ImageContainer">
                    <img src={"/images/products/" + fileArr[(Math.floor(Math.random() * fileArr.length))].toString()} alt="" />
                </div>
            )
        }

        // const childElements = this.props.elements.map(function (element) {
        //     return (
        //         <li className="image-element-class">
        //             <img src={element.src} />
        //         </li>
        //     );
        // });

        return (
            <Aux>
                <Title></Title>
                <section className={classes.GalleryContainer}>
                    <Masonry
                        className='my-gallery-class' // default ''
                        // elementType={''} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                    >
                        {galleryItems}
                    </Masonry>
                </section>
            </Aux>
        );
    }
}

export default Gallery;