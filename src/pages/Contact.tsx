import React, {useState, useEffect} from 'react';
import header_background from './../images/contact_pic.jpg';
import Header from '../components/Header';

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
        </div>
    )
}

export default Contact; 