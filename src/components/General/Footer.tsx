import React from 'react';
import WebFooter from './web/WebFooter';
import MobileFooter from './mobile/MobileFooter';

interface FooterProps {
    screenWidth: number;
}

const Footer: React.FC<FooterProps> = (props) => {
    if (props.screenWidth > 700) {
        return (
            <WebFooter />
        )
    }
    return(<MobileFooter/>)
}

export default Footer; 