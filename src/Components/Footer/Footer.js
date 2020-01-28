import React from 'react'

import classes from './Footer.module.scss'


const footer = (props) => {

    window.onscroll = function () {
        var mediaShown = document.getElementsByClassName(classes.ShowMedia);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && mediaShown.length < 1) {
            var footerIcons = document.getElementsByClassName(classes.MediaWrapper);
            footerIcons[0].classList.add(classes.ShowMedia);
            var time = 0;
            for (let i = 0; i < footerIcons.length; i++) {
                setTimeout(() => {
                    footerIcons[i].classList.add(classes.ShowMedia);
                }, time);
                time = time + 200;
            }
        }
    };

    var logoImgs = "/images/logos/";

    return (
        <footer>
            <div className={classes.Contact}>
                <header>
                    <h2>Questions or comments?</h2>
                    <p>Drop me an email below</p>
                </header>
                <ul>
                    <li>
                        <a href="mailto: CamzCakery@gmail.com?Subject=Hello" target="_top">
                            <div className={classes.MediaWrapper}>
                                <img className={classes.Media} src={logoImgs + "Mail_Thumb.png"} alt="Mail Icon"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.facebook.com/camzcakery">
                            <div className={classes.MediaWrapper}>
                                <img className={classes.Media} src={logoImgs + "Facebook_Thumb.png"} alt="Facebook Icon"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.instagram.com/camzcakery19">
                            <div className={classes.MediaWrapper}>
                                <img className={classes.Media} src={logoImgs + "Instragram_Thumb.png"} alt="Instagram Icon"/>
                            </div>
                        </a>
                    </li>
                </ul>
                <p className={classes.FootText}>© 2019 <strong>Camille's Cakery</strong> All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default footer;