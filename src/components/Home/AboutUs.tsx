import React from 'react';
import './AboutUs.css';
import { Link as ScrollLink, Element } from 'react-scroll';

interface AboutUsProps {
    screenWidth: number;
}

const AboutUs: React.FC<AboutUsProps> = (props) => {
    return (
        <Element name="about-us">
            <div className="about-us-div">
                <div className='about-us-content' style={{
                    maxWidth: props.screenWidth > 700 ? '40%' : '75%'
                }}>
                    <h1 className='about-us-header'>
                        About Us
                    </h1>
                    <hr style={{
                        width: '25%',
                        height: '1%',
                        backgroundColor: 'white',
                        border: 'none'
                    }} />
                    <h5 className='about-us-motto'>
                        Where Every Detail Matters
                    </h5>
                    <p className='about-us-text' style={{
                        fontSize: props.screenWidth > 700 ? '1em' : '0.75em'
                    }}>
                        Welcome to LuxeGlow Auto Spa, your premier destination for top-tier car detailing in Windsor, Ontario. Our skilled professionals bring years of expertise to every project, treating each vehicle with the utmost care. We use only the finest products and techniques, ensuring the highest standard of treatment. Our services include interior cleaning, paint correction, ceramic coating, and more, tailored to your needs. With a focus on customer satisfaction, our knowledgeable staff provides expert advice in our luxurious facility. Experience the LuxeGlow difference today and trust us to leave your car shining with a radiant glow.
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default AboutUs; 