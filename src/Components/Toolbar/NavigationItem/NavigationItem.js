import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import classes from './NavigationItem.module.scss';
import Aux from '../../../Hoc/Aux';

class navigationItem extends Component {

    componentDidUpdate() {
        if (!this.props.sideMenuIsOpen)
            this.closeSubmenu();
    }
    submenuClasses = [classes.SubList]

    toggleSubmenu = () => {
        if (window.innerWidth <= 750) {
            if (this.submenuClasses.includes(classes.Open)) this.submenuClasses.pop(classes.Open);
            else this.submenuClasses.push(classes.Open);
        }
        this.setState({});
    }

    closeSubmenu = () => {
        if (!this.props.sideMenuIsOpen && this.submenuClasses.includes(classes.Open)) {
            this.submenuClasses.pop(classes.Open);
            this.setState({});
        }
    }

    render() {

        let submenu = null;
        if (this.props.children != null) {
            submenu = (
                <ul className={this.submenuClasses.join(" ")}>
                    <div className={classes.Border}></div>
                    {this.props.children.map((item, index) => (
                        <li className={classes.SubListItem} key={index} >
                            <Link to={"/Products/" + item}>
                                <span className={classes.NavSubAnchor}>

                                    {item}
                                </span>
                            </Link>
                        </li>
                    ))
                    }
                </ul >
            )
        }

        return (
            <Aux>
                <Link to={"/" + this.props.navItemName}>
                    <span
                        className={classes.NavAnchor}
                        key={this.props.navKey}
                        onClick={this.toggleSubmenu}>
                        {this.props.navItemName}
                    </span >
                </Link>
                {submenu}
            </Aux >
        )
    }
}

export default navigationItem;