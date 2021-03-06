import React, { Component } from 'react'
import Title from '../Content/Title/Title';
import ProductGallery from './Product/ProductGallery';
import Aux from '../../Hoc/Aux';
import PageData from '../../assets/Data/Page-Data.json'

class Content extends Component {
    constructor(props) {
        super(props);
        // this.pages = PageData;
        this.pages = {
            "Pages": {
                "Cupcakes": {
                    "Title": "Cupcakes",
                    "TagLine": "Try our regular or mini sized cupcakes",
                    "Photos": [
                        { "Image": "cupcake-chocolate.jpg", "SubTitle": "Chocolate", "Ingredients": "Coconut flour, MCT oil, baking powder, coconut oil, grass fed butter, erythritol" },
                        { "Image": "cupcake-lemon.jpg", "SubTitle": "Lemon" },
                        { "Image": "cupcake-marble.jpg", "SubTitle": "Marble" },
                        { "Image": "cupcake-red-velvet.jpg", "SubTitle": "Red Velvet" },
                        { "Image": "cupcake-smore.jpg", "SubTitle": "Smore" },
                        { "Image": "cupcake-strawberry.jpg", "SubTitle": "Strawberry" },
                        { "Image": "cupcake-tiedye.jpg", "SubTitle": "Tie Dye" },
                        { "Image": "cupcake-vanilla.jpg", "SubTitle": "Vanilla" }
                    ]
                },
                "Cakes": {
                    "Title": "Cakes",
                    "TagLine": "Classic or Custom Cakes",
                    "Photos": [
                        { "Image": "cake-chocolate.jpg", "SubTitle": "Chocolate" },
                        { "Image": "cake-naked.jpg", "SubTitle": "Naked" },
                        { "Image": "cake-strawberry.jpg", "SubTitle": "Strawberry" },
                        { "Image": "cake-white.jpg", "SubTitle": "White Cake" }
                    ]
                },
                "Cookies": {
                    "Title": "Cookies",
                    "TagLine": "They're sure to warm your heart",
                    "Photos": [
                        { "Image": "cookie-chocolate-chip.jpg", "SubTitle": "Chocolate Chip" },
                        { "Image": "cookie-crinkle.jpg", "SubTitle": "Crinkle" },
                        { "Image": "cookie-snickerdoodle.jpg", "SubTitle": "Snickerdoodle" }
                    ]
                },
                "Cakepops": {
                    "Title": "Cakepops",
                    "TagLine": "For the little ones",
                    "Photos": [
                        { "Image": "cakepop-babypink.jpg", "SubTitle": "Baby Pink" },
                        { "Image": "cakepop-funfetti.jpg", "SubTitle": "Funfetti" },
                        { "Image": "cakepop-lemon.jpg", "SubTitle": "Lemon" },
                        { "Image": "cakepop-red-velvet.jpg", "SubTitle": "Red Velvet" },
                        { "Image": "cakepop-vanilla.jpg", "SubTitle": "Vanilla White Cake" }
                    ]
                },
                "Sweet Treats": {
                    "Title": "Sweet Treats",
                    "TagLine": "Additional Goodies",
                    "Photos": [
                        { "Image": "sweets-chocolate-pretzel-rods.jpg", "SubTitle": "Chocolate Pretzel Rods" },
                        { "Image": "sweets-chocolate-strawberries.jpg", "SubTitle": "Chocolate Strawberries" }
                    ]
                },
                "Keto Friendly": {
                    "Title": "Keto Friendly",
                    "TagLine": "Additional options for the carb counters",
                    "Photos": [
                        { "Image": "keto-friendly-coconut.jpg", "SubTitle": "MCT Oil Coconut Cookie", "Ingredients": "Coconut flour, MCT oil, baking powder, coconut oil, grass fed butter, erythritol" }
                    ]
                }
            }
        }

        if (Object.keys(this.pages.Pages).indexOf(this.props.match.params.product) > -1)
            this.state = { product: this.pages.Pages[this.props.match.params.product] }
        else this.state = null;
    }



    componentDidMount = () => {

    }

    componentDidUpdate = () => {
        if (Object.keys(this.pages.Pages).indexOf(this.props.match.params.product) > -1){

            if (this.state.product !== this.pages.Pages[this.props.match.params.product]) {
                this.setState({ product: this.pages.Pages[this.props.match.params.product] })
            }
        }
    }



    render() {
        return (
            <Aux>
                <Title>{this.props.children}</Title>
                <ProductGallery
                    products={this.state.product}
                    pageTitle={this.props.match.params.product}></ProductGallery>
            </Aux>
        )
    }
}

export default Content;