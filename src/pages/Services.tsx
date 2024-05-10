import React, { useState, useEffect } from 'react';
import './Services.css';
import header_background from './../images/services_page.jpg'

import Header from '../components/Header';
import ServiceDisplay from '../components/General/ServiceDisplay';
import { getServices } from './../helpers/ServicesHelper'
import Footer from '../components/General/Footer';

const Services: React.FC = () => {
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
        <div className='services-container'>
            {screenWidth > 700 ?
                (
                    <>
                        <div className='content-above-image'>
                            <Header activePage="services" screenWidth={screenWidth} />
                            <h1 className="services-header">
                                Our Services
                            </h1>
                        </div>
                        <img src={header_background} className={"services-header-pic"} />
                    </>
                )
                :
                (
                    <>
                        <Header activePage="services" screenWidth={screenWidth} />
                        <div style={{
                            position: 'relative'
                        }}>
                            <div className='content-above-image'>
                                <h1 className="services-header" style = {{
                                    fontSize: '7vw'
                                }}>
                                    Our Services
                                </h1>
                            </div>
                            <img src={header_background} className={"services-header-pic"} />
                        </div>
                    </>
                )

            }

            <p className='services-top-text' style={{
                marginTop: '2%',
                marginBottom: '2%'
            }}>
                To better serve you, we allow you to choose which services your car needs.
            </p>
            <div className='services-display'>
                {services.map((service) => {
                    return (
                        <ServiceDisplay screenWidth={screenWidth} service={service} />
                    )
                })}
            </div>
            <h2 className='services-disclaimer'>
                DISCLAIMER
            </h2>
            <p className='services-top-text' style={{
            }}>
                Prices vary according to size & condition of the vehicle(s).<br />
                Contact us for more information and a more precise quote!
            </p>
            <div className="services-contact">
                Contact Us
            </div>
            <Footer screenWidth={screenWidth} />
        </div>
    )
}

export default Services; 