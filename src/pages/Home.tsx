import React, { useState, useEffect } from 'react';
import './Home.css'
import styles from './Home.module.css';
import AboutUs from '../components/Home/AboutUs';
import ServiceDisplay from '../components/General/ServiceDisplay';
import Reviews from '../components/Home/Reviews';
import { useFetch } from './../helpers/ServicesHelper';
import { getServicesAPI, getReviews } from './../helpers/ServicesHelper';
import { Element } from 'react-scroll';

const Home: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isFetchingServices, servicesData] = useFetch(getServicesAPI);
    const [isFetchingReviews, reviewsData] = useFetch(getReviews);

    // Function to update screen width and height on resize
    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener to update screen size on resize
        window.addEventListener('resize', updateScreenSize);

        const fetchServices = async () => {
            const servicesData = await getServicesAPI();
            console.log(servicesData);
        };
        fetchServices();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>
            <AboutUs screenWidth={screenWidth} />
            <Element name="prices">
                <h1 className={styles.pricing_header}>
                    OUR PRICING
                </h1>

                <div className={styles.services_display}>
                    {!isFetchingServices && servicesData?.map((service) => {
                        return (
                            <ServiceDisplay screenWidth={screenWidth} service={service} />
                        )
                    })}
                </div>
            </Element>
            {!isFetchingReviews && <Reviews screenWidth={screenWidth} reviews={reviewsData}/>}
        </>
    )
}

export default Home; 