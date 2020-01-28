import React from 'react';

import Aux from '../../Hoc/Aux';
import Title from '../Content/Title/Title'
import classes from './Packages.module.scss';

const packages = (props) => {
    let aLaCarteData = [
        "$30 for additional dozen of regular size cupcakes on any package ordered",
        "$20 for additional dozen mini cupcakes on any package ordered",
        "$30 for additional dozen of cake pops on any package ordered",
        "$18 for additional dozen of pretzel rods dipped in chocolate on any package ordered",
        "$15 for additional dozen of cookies on any package ordered",
        "$25 for additional dozen chocolate dipped strawberries on any package ordered"]

    let packageData = {
        "Packages": [{
            "Title": "PACKAGE A",
            "Description": "Starting as $90.00",
            "Items": [
                {"Description": "1 dozen cupcakes or 18 mini cupcakes", "ImagePath": "/images/icons/cupcake.png"},
                {"Description": "1 dozen cake pops", "ImagePath": "/images/icons/cakepop-icon.jpeg"},
                {"Description": "1 dozen pretzel rods dipped in chocolate", "ImagePath": "/images/icons/candy.jpeg"},
                {"Description": "1 dozen cookies of your choice", "ImagePath": "/images/icons/cookie.jpeg"}
            ]
        },
        {
            "Title": "PACKAGE B",
            "Description": "Starting as $120.00",
            "Items": [
                {"Description": "1 dozen cupcakes or 18 mini cupcakes", "ImagePath": "/images/icons/cupcake.png"},
                {"Description": "2 dozen cake pops", "ImagePath": "/images/icons/cakepop-icon.jpeg"},
                {"Description": "2 dozen pretzel rods dipped in chocolate", "ImagePath": "/images/icons/candy.jpeg"},
                {"Description": "1 dozen cookies of your choice", "ImagePath": "/images/icons/cookie.jpeg"}
            ]
        },
        {
            "Title": "PACKAGE C",
            "Description": "Starting as $170.00",
            "Items": [
                {"Description": "2 dozen cupcakes or 3 dozen mini cupcakes", "ImagePath": "/images/icons/cupcake.png"},
                {"Description": "2 dozen cake pops", "ImagePath": "/images/icons/cakepop-icon.jpeg"},
                {"Description": "2 dozen pretzel rods dipped in chocolate", "ImagePath": "/images/icons/candy.jpeg"},
                {"Description": "2 dozen cookies of your choice", "ImagePath": "/images/icons/cookie.jpeg"}
            ]
        },
        {
            "Title": "PACKAGE D",
            "Description": "Starting as $200.00",
            "Items": [
                {"Description": "2 dozen cupcakes or 3 dozen mini cupcakes", "ImagePath": "/images/icons/cupcake.png"},
                {"Description": "2 dozen cake pops", "ImagePath": "/images/icons/cakepop-icon.jpeg"},
                {"Description": "2 dozen pretzel rods dipped in chocolate", "ImagePath": "/images/icons/candy.jpeg"},
                {"Description": "2 dozen cookies of your choice", "ImagePath": "/images/icons/cookie.jpeg"},
                {"Description": "18 chocolate dipped strawberries", "ImagePath": "/images/icons/strawberry.jpeg"}
            ],
        },
        ]
    }

    let packages = Object.keys(packageData.Packages).map(p => {
        let items = Object.keys(packageData.Packages[p].Items).map(i => {
            console.log(packageData.Packages[p].Items[i].ImagePath)
            return (
                <li><img 
                    src={packageData.Packages[p].Items[i].ImagePath} 
                    alt="" 
                    className={classes.Icon}/>{packageData.Packages[p].Items[i].Description}</li>
            )

        })
        return (
            <div className={classes.PackageCard}>
                <h2 className={classes.PackageTitle}>{packageData.Packages[p].Title}</h2>
                <h4>{packageData.Packages[p].Description}</h4>
                <ul className={classes.PackageList}>
                    {items}
                </ul>
            </div>
        )

    })

    var aLaCarte = [];

    aLaCarteData.forEach(item =>
        aLaCarte.push(<li className={classes.PackageAddOnListItem}>{item}</li>)
    )

    return (
        <Aux>
            <Title></Title>
            <section className={classes.PackagesContainer}>
                {packages}
                <h2>Add on Options:</h2>
                <ul className={classes.PackageAddOnContainer}>{aLaCarte}</ul>
            </section>
        </Aux>
    )
}

export default packages;