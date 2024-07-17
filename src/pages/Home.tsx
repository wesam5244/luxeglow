import React, { useState, useEffect } from 'react';
import './Home.css'
import styles from './Home.module.css'; 
import AboutUs from '../components/Home/AboutUs';
import ServiceDisplay from '../components/General/ServiceDisplay';
import Reviews from '../components/Home/Reviews';
import { useFetchServices } from './../helpers/ServicesHelper';


const Home: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isFetching, fetchedData] = useFetchServices(); 
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
    
    return (
        <>
            <AboutUs screenWidth={screenWidth} />
            <h1 className={styles.pricing_header}>
                OUR PRICING
            </h1>
            <div className={styles.services_display}>
                {!isFetching && fetchedData.map((service) => {
                    return (
                        <ServiceDisplay screenWidth={screenWidth} service={service} />
                    )
                })}
            </div>
            <Reviews screenWidth={screenWidth} />
        </>
    )
}

export default Home; 