import React, { useState, useEffect } from 'react';
import styles from './RootLayout.module.css'; 
import { Outlet } from 'react-router-dom';
import Footer from '../components/General/Footer';
import PageTop from '../components/PageTop';
const RootLayout: React.FC = () => {
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
    return(
        <div className={styles.page_container}>
            <PageTop screenWidth={screenWidth}/>
            <Outlet/>
            <Footer screenWidth={screenWidth} />
        </div>
    )
}

export default RootLayout; 