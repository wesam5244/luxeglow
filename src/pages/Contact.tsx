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
                        <h2 style={{fontSize: '1.8em'}}>
                            CONTACT
                        </h2>
                        <div className='contact-info-row'>
                            <FontAwesomeIcon icon={faPhone} style={{fontSize: '1.5em'}}/>
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
                            <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '1.5em'}}/>
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
                            <FontAwesomeIcon icon={faClock} style={{fontSize: '1.5em'}}/>
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
                                <p style={{marginTop: '2%'}}>
                                    *Hours can vary by season, please call ahead for availability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer screenWidth={screenWidth} />
        </div>
    )
}

export default Contact; 