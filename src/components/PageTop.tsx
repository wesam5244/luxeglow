import React from 'react';
import styles from './PageTop.module.css';
import { useLocation } from 'react-router-dom';
import escalade from './../images/escalade.jpg';
import services_header_img from './../images/services_page.jpg'
import contact_header_img from './../images/contact_pic.jpg'

import Header from './Header';

interface PageTopProps {
    screenWidth: number
}

const PageTop: React.FC<PageTopProps> = ({ screenWidth }) => {
    const location = useLocation();

    var imageSrc = escalade;
    var headerTxt = 'Ignite Brilliance, Embrace Elegance - LuxeGlow Auto Spa,  Transforming Rides, One Detail at a Time';
    if (location.pathname == '/services') {
        imageSrc = services_header_img;
        headerTxt = 'Our Services';
    }
    else if (location.pathname == '/contact') {
        imageSrc = contact_header_img;
        headerTxt = 'Contact Us';
    }

    if (screenWidth > 700) {
        var headerPicStyle = styles.escalade_pic_web;
        if (location.pathname == '/services') headerPicStyle = styles.services_header_pic;
        else if (location.pathname == '/contact') headerPicStyle = styles.services_header_pic;
        
        return (
            <>
                <div className={styles.content_above_image}>
                    <Header screenWidth={screenWidth} />
                    <h1 className={styles.header_text}>
                        {headerTxt}
                    </h1>
                </div>
                <img src={imageSrc} className={headerPicStyle} />
            </>
        )
    }
    else {
        return (
            <>
                <Header screenWidth={screenWidth} />
                <div className={location.pathname == '/' ? styles.mobile_home_image_container : ''}>
                    <img src={imageSrc} className={location.pathname == '/' ? styles.escalade_pic_mobile : styles.services_header_pic} />
                    <div className={styles.overlay_text}>
                        <h1 className={styles.car_text}>
                            {headerTxt}
                        </h1>
                    </div>
                </div>
            </>
        )
    }

}

export default PageTop; 