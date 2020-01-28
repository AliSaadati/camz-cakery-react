import React, { Component } from 'react'

import classes from './ProductGallery.module.scss';
import ProductBox from './ProductBox';
class productGallery extends Component {

    // componentDidMount = () => {
    //     console.log(this.props.products.Photos);
    // }

    componentDidUpdate = () => {
        console.log(this.props.products)
    }

    render() {

        let productList = [];
        if (this.props.products) {
            for (let n in this.props.products.Photos) {
                productList.push(
                    <ProductBox
                        className={classes.GridItem}
                        image={"/images/products/"+this.props.products.Photos[n].Image}
                        description={this.props.products.Photos[n].SubTitle}
                        ingredients={this.props.products.Photos[n].Ingredients ? this.props.products.Photos[n].Ingredients : null}></ProductBox>
                )
            }
        }


        return (
            <section className={classes.ProductGalleryContainer}>
            
                <div className={classes.PageTitle}>
                    <h2 className={classes.Title}>{this.props.products.Title}</h2>
                    <h4>{this.props.products.TagLine}</h4>
                </div>
                <section className={classes.ProductGallery}>
                    {productList}
                </section>
            </section>
        )
    }
}

export default productGallery;