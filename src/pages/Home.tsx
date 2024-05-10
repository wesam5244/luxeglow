import React, { useState, useEffect } from 'react';
import './Home.css'

import Header from '../components/Header';
import HomeTop from '../components/Home/HomeTop';
import AboutUs from '../components/Home/AboutUs';
import ServiceDisplay from '../components/General/ServiceDisplay';
import Footer from '../components/General/Footer';
import { getServices } from './../helpers/ServicesHelper'

const Home: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to update screen width and height on resize
    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener to update screen size on resize
        window.addEventListener('resize', updateScreenSize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const services = getServices();
    return (
        <div className='home-container'>
            <HomeTop screenWidth={screenWidth} />
            <AboutUs screenWidth={screenWidth} />
            <h1 style = {{
                textAlign: 'center',
                color: 'white',
                marginBottom: '2%'
            }}>
                OUR PRICING
            </h1>
            <div className='services-display' style = {{marginBottom: '5%'}}>
                {services.map((service) => {
                    return (
                        <ServiceDisplay screenWidth={screenWidth} service={service} />
                    )
                })}
            </div>
            <Footer screenWidth={screenWidth}/>
        </div>
    )
}

export default Home; 