import React from 'react';
import './HomeTop.css';
import escalade from './../../images/escalade.jpg';
import Header from '../Header';

interface HomeTopProps {
    screenWidth: number;
}

const HomeTop: React.FC<HomeTopProps> = (props) => {
    if (props.screenWidth > 700) {
        return (
            <>
                <div className='content-above-image'>
                    <Header screenWidth={props.screenWidth} />
                    <h1 className="home-text">
                        Ignite Brilliance, Embrace Elegance - LuxeGlow Auto Spa,  Transforming Rides, One Detail at a Time
                    </h1>
                </div>
                <img src={escalade} className='escalade-pic-web' />
            </>
        )
    }
    else {
        return (
            <>
                <Header screenWidth={props.screenWidth} />
                <div className='mobile-image-container'>
                    <img src={escalade} className='escalade-pic-mobile' />
                    <div className="overlay-text">
                        <h1 className="car-text">
                            Ignite Brilliance, Embrace Elegance - LuxeGlow Auto Spa,  Transforming Rides, One Detail at a Time
                        </h1>
                    </div>
                </div>
            </>

        )
    }
}

export default HomeTop; 