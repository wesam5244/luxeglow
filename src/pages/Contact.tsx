import React, { useState, useEffect } from 'react';
import header_background from './../images/contact_pic.jpg'
import Header from '../components/Header';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/General/Footer';

const Contact: React.FC = () => {
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
    return (
        <div className='contact-container'>
            {screenWidth > 700 ?
                (
                    <>
                        <div className='content-above-image'>
                            <Header activePage="contact_us" screenWidth={screenWidth} />
                            <h1 className="services-header">
                                Contact Us
                            </h1>
                        </div>
                        <img src={header_background} className={"contact-header-pic"} />
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
                                <h1 className="services-header" style={{
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
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                <div className='form-container'>
                    Hello
                </div>
                <div className='contact-info-container'>
                    <div className='contact-info'>
                        <h2 style={{ fontSize: '1.8em' }}>
                            CONTACT
                        </h2>
                        <div className='contact-info-row'>
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '1.5em' }} />
                            <div className='contact-info-row-col'>
                                <h3>
                                    Phone
                                </h3>
                                <p>
                                    (519) 816-7258
                                </p>
                            </div>
                        </div>
                        <div className='contact-info-row'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.5em' }} />
                            <div className='contact-info-row-col'>
                                <h3>
                                    Email
                                </h3>
                                <p>
                                    luxeglowautospa@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className='contact-info-row'>
                            <FontAwesomeIcon icon={faClock} style={{ fontSize: '1.5em' }} />
                            <div className='contact-info-row-col'>
                                <h3>
                                    Hours
                                </h3>
                                <p>
                                    Mon - Thur: 9am - 6pm
                                </p>
                                <p>
                                    Fri: Closed
                                </p>
                                <p>
                                    Sat & Sun: 9am - 6pm
                                </p>
                                <p style={{ marginTop: '2%' }}>
                                    *Hours can vary by season, please call ahead for availability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='location-container'>
                <h2 style={{ fontSize: '1.8em' }}>
                    LOCATION
                </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.779145430004!2d-83.04638702508099!3d42.304577738606845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d005ff996f5%3A0x3d3c44730772afe3!2sLuxeGlow%20Auto%20Spa!5e0!3m2!1sen!2sca!4v1711861763548!5m2!1sen!2sca" style={{ border: '0', width: '100%', height: '40vh', margin: '0 auto' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <Footer screenWidth={screenWidth} />
        </div>
    )
}

export default Contact; 